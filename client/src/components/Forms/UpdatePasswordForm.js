import React, { useState } from 'react'
import { Input, Label, HelperText, Button } from '@windmill/react-ui'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { userService } from '../../services'
import { useTranslation } from 'react-i18next'
import { dictionary } from '../../resources/multiLanguages'

function UpdatePasswordForm({formRef, callback, m_user}) {
  const [saved, setSaved] = useState(false)
  const { t } = useTranslation();
  const languageReducer = "de";
  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        password: ''
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string().min(8)
          .matches('^.*[0-9].*$', 'Atleast one number required')
          .matches('^.*[a-zA-Z].*$', 'Atleast one letter required')
          .required(t('Password is required')),
      })}
      onSubmit={({ password }, { setStatus, setSubmitting }) => {
        setSaved(false)
        setStatus()
        userService.updateUserPassword(m_user.id, password)
        .then(
          result => {
            setSaved(true)
            setSubmitting(false)
            if(callback) callback(result.data)
          },
          error => {
            setSubmitting(false);
            if(error.response) {
              setStatus(error.response.data)
            } else {
              setStatus("Some error occured.")
            }
            if(callback) callback(null)
          }
        )
      }}
    >  
      {({ errors, status, touched, isSubmitting }) => (
        <Form>
           <Label>
            <span>{dictionary["profile"][languageReducer]["passwordForm"]["oldPassword"]}:</span>
            <Field className="mt-1" as={Input} name="password" type="password" placeholder="***************" />
            {errors.password && touched.password ? (
              <div>   
                <HelperText valid={false}>{t(errors.password)}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className='mt-5'>
            <span>{dictionary["profile"][languageReducer]["passwordForm"]["typeNewPassword"]}:</span>
            <Field className="mt-1" as={Input} name="password" type="password" placeholder="***************" />
            {errors.password && touched.password ? (
              <div>   
                <HelperText valid={false}>{t(errors.password)}</HelperText>
              </div>
            ) : null}
          </Label>

          {!formRef && 
            <Button className="mt-6" block type="submit" value="submit" disabled={isSubmitting}>
              {dictionary["profile"][languageReducer]["passwordForm"]["savePassword"]}
            </Button> 
          }

          {status && (
            <HelperText valid={false}>{status}</HelperText>
          )}

          {saved && (
            <HelperText valid={true}>Saved!</HelperText>
          )}
          
        </Form>
      )}
    </Formik>
  );
}

export default UpdatePasswordForm