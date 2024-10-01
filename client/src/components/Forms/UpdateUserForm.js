import React, { useState, useContext } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { userService } from '../../services'
import { AuthContext } from '../../context/AuthContext'
import { Input, Label, HelperText, Button } from '@windmill/react-ui'
import { useTranslation } from 'react-i18next'
import { dictionary } from '../../resources/multiLanguages';

function UpdateUserForm({ formRef, callback, m_user }) {
  const { user, setUser } = useContext(AuthContext)
  const [saved, setSaved] = useState(false)
  const { t } = useTranslation()
  const languageReducer = "de";

  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        name: m_user ? m_user.name : '',
        phone_number: m_user ? m_user.phone_number : '',
        address: m_user ? m_user.address : '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required(dictionary["profile"][languageReducer]["userform"]["firstNameReq"]),
        phone_number: Yup.string().required(dictionary["profile"][languageReducer]["userform"]["lastNameReq"]),
        address: Yup.string(),
      })}
      onSubmit={({ name, phone_number, address }, { setStatus, setSubmitting }) => {
        setSaved(false)
        setStatus()
        userService.updateUserDetails({
          name,
          phone_number,
          address,
        })
          .then(
            response => {
              setSaved(true)
              setSubmitting(false)

              console.log("Updatform response.data", response.data);

              if (user._id === m_user._id) {
                setUser(response.data.data)
                localStorage.setItem("user", JSON.stringify(response.data.data));
              } if (callback) callback(response.data)
            },
            error => {
              setSubmitting(false);
              if (error.response) {
                setStatus(t(error.response.data));
              } else {
                setStatus(t('Some error occured.'));
              }
              if (callback) callback(null)
            }
          );
      }}
    >
      {({ errors, status, touched, isSubmitting }) => (
        <Form>
          <div className='flex flex-col gap-4'>
            <Label className='flex-1'>
              <span>{t("Name")}:</span>
              <Field className="mt-1" as={Input} name="name" type="text" placeholder={dictionary["profile"][languageReducer]["userform"]["enterFirstName"]} />
              {errors.name && touched.name ? (
                <div>
                  <HelperText valid={false}>{t(errors.name)}</HelperText>
                </div>
              ) : null}
            </Label>
            <Label className='flex-1'>
              <span>{t("Phone")}:</span>
              <Field className="mt-1" as={Input} name="phone_number" type="text" placeholder={dictionary["profile"][languageReducer]["userform"]["enterLastName"]} />
              {errors.phone_number && touched.phone_number ? (
                <div>
                  <HelperText valid={false}>{t(errors.phone_number)}</HelperText>
                </div>
              ) : null}
            </Label>


            <Label className='flex-1'>
              <span>{t("Address")}:</span>
              <Field className="mt-1" as={Input} name="address" type="text" placeholder={dictionary["profile"][languageReducer]["userform"]["enterFirstName"]} />
              {errors.address && touched.address ? (
                <div>
                  <HelperText valid={false}>{t(errors.address)}</HelperText>
                </div>
              ) : null}
            </Label>
          </div>


          {!formRef &&
            <Button className="mt-6" block type="submit" value="submit" disabled={isSubmitting}>
              {t("Save Details")}
            </Button>
          }

          {status && (
            <HelperText valid={false}>{status.message}</HelperText>
          )}

          {saved && (
            <HelperText valid={true}>Saved!</HelperText>
          )}

        </Form>
      )}
    </Formik>
  )
}

export default UpdateUserForm