import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";

import { Label, Input, HelperText, Button } from "@windmill/react-ui";
import { dictionary } from "../../resources/multiLanguages";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const { login } = useContext(AuthContext);
  const { t } = useTranslation();
  const languageReducer = "de";
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required(dictionary["loginForm"][languageReducer]["emailIsRequired"]),
        password: Yup.string().required(dictionary["loginForm"][languageReducer]["passwordIsRequired"]),
      })}

      onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
        setSubmitting(true);
        setStatus();
        login(email, password).catch((error) => {

          if (error.response) {
            if (error.response.data.message === "Please activate your account then try to login") {
              localStorage.setItem("active_email", email);
              history.push("/auth/active-account");
            } else {
              setStatus(error.response.data.message);
            }
          } else {
            setStatus(dictionary["loginForm"][languageReducer]["errorMessage"]);
          }
          setSubmitting(false);
        });
      }}


    >
      {({ errors, status, touched, isSubmitting }) => (
        <Form>
          <Label>
            <Field
              className="mt-1"
              as={Input}
              name="email"
              type="email"
              placeholder={dictionary["loginForm"][languageReducer]["emailPlaceholder"]}
            />
            {errors.email && touched.email ? (
              <div>
                <HelperText valid={false}>{t(errors.email)}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="mt-4">

            <Field
              className="mt-1"
              as={Input}
              name="password"
              type="password"
              placeholder={dictionary["loginForm"][languageReducer]["passwordPlaceholder"]}
            />
            {errors.password && touched.password ? (
              <div>
                <HelperText valid={false}>{t(errors.password)}</HelperText>
              </div>
            ) : null}
          </Label>

          <Button
            className="mt-4"
            block
            type="submit"
            value="submit"
            disabled={isSubmitting}
          >
            {dictionary["loginForm"][languageReducer]["loginButton"]}
          </Button>
          {status && <HelperText valid={false}>{status}</HelperText>}
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
