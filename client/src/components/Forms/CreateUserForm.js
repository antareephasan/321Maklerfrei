import React from "react"
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { userService } from "../../services"
import { Input, Label, Select, HelperText } from '@windmill/react-ui'

function CreateUserForm({formRef, callback}) {
  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        username: '',
        lastname: '',
        email: '',
        password: '',
        role: 'USER',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required'),
        lastname: Yup.string().required('Lastname is required'),
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().min(8)
          .matches('^.*[0-9].*$', 'Atleast one number required')
          .matches('^.*[a-zA-Z].*$', 'Atleast one letter required')
          .required('Password is required'),
        role: Yup.string().required('Role is required'),          
      })}
      onSubmit={async ({ username, lastname, email,  password, role }, { setStatus, setSubmitting }) => {
        setStatus();
        await userService.createUser(username, lastname, email, password, role.toUpperCase())
          .then(
            response => {
              callback(true);
            },
            error => {
              if(error.response) {
                setStatus(error.response.data);
              } else {
                setStatus('Some error occured.');
              }
              callback(false);
            }
          );
      }}
    >  
      {({ errors, status, touched, isSubmitting }) => (
        <Form>
          <Label>
            <span>First Name</span>
            <Field className="mt-1" as={Input} name="username" type="text" placeholder="John" />
            {errors.username && touched.username ? (
              <div>   
                <HelperText valid={false}>{errors.username}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label>
            <span>Lastname Name</span>
            <Field className="mt-1" as={Input} name="lastname" type="text" placeholder="Doe" />
            {errors.lastname && touched.lastname ? (
              <div>   
                <HelperText valid={false}>{errors.lastname}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="mt-4">
            <span>Email</span>
            <Field className="mt-1" as={Input} name="email" type="email" placeholder="john@doe.com" />
            {errors.email && touched.email ? (
              <div>   
                <HelperText valid={false}>{errors.email}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="mt-4">
            <span>Password</span>
            <Field className="mt-1" as={Input} name="password" type="password" placeholder="***************" />
            {errors.password && touched.password ? (
              <div>   
                <HelperText valid={false}>{errors.password}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="mt-4">
            <span>Role</span>
            <Field className="mt-1" as={Select} name="role">
              <option val="USER">User</option>
              <option val="ADMIN">Admin</option>
            </Field>
          </Label>

          {status && (
            <HelperText valid={false}>{status.message}</HelperText>
          )}
          
        </Form>
      )}
    </Formik>
  );
}

export default CreateUserForm