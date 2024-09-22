import React, { useState, useContext } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { AuthContext } from '../../context/AuthContext'
import { useTranslation } from 'react-i18next'
import { Label, Input, HelperText, Button } from '@windmill/react-ui'

function ForgotPasswordForm() {
  const { forgotPassword } = useContext(AuthContext)
  const [saved, setSaved] = useState(false)
  const {t} = useTranslation()

  if(saved) {
    return (
      <p className="text-sm font-medium text-gray-600">
        Wir haben dir eine Anleitung zum Zurücksetzen deines Passwortes per E-Mail geschickt. Falls du sie nicht findest, schau bitte auch im Spam Ordner nach.
      </p>
    )
  }

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required(t("Email is required")),
      })}
      onSubmit={({ email }, { setStatus, setSubmitting }) => {
        setSubmitting(true)
        setStatus()
        forgotPassword(email)
        .then(response => {
          setSubmitting(false)
          setSaved(true)
        })
        .catch(error => {
          if(error.response) {
            setStatus(error.response.data.message)
          } else {
            setStatus('Some error occured. Please try again.')
          }
          setSubmitting(false)
        })
      }}
    >  
      {({ errors, status, touched, isSubmitting }) => (
        <Form>
          <Label>
            <span>{t("Email")}:</span>
            <Field className="mt-1" as={Input} name="email" type="email" placeholder={t("max.mustermann@gmail.com")} />
            {errors.email && touched.email ? (
              <div>   
                <HelperText valid={false}>{t(errors.email)}</HelperText>
              </div>
            ) : null}
            
          </Label>

          <Button className="mt-4" block type="submit" value="submit" disabled={isSubmitting}>
            {t("Recover password")}
          </Button>
          {status && (
            <HelperText valid={false}>{status}</HelperText>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default ForgotPasswordForm