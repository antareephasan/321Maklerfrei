import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
import { Input, Label, HelperText, Button } from "@windmill/react-ui";
import { Link } from "react-router-dom";

function CreateAccountForm() {
  const { register } = useContext(AuthContext);
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={{
        username: "",
        lastname: "",
        email: "",
        password: "",
        customCheckLogin: false,
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required(t("Required")),
        email: Yup.string().email().required(t("Required")),
        password: Yup.string()
        .min(8)
        .matches("^.*[0-9].*$", (t("Atleast one number required")))
        .matches("^.*[a-zA-Z].*$", (t("Atleast one number required")))
        .required(t("Required")),
        customCheckLogin: Yup.boolean().oneOf(
          [true],
          (t("Must agree Privacy Policy"))
          ),
          lastname: Yup.string().required(t("Required")),
      })}
      onSubmit={(
        { username, email, password, lastname },
        { setStatus, setSubmitting }
      ) => {
        setSubmitting(true);
        setStatus();
        register(username, email, password, lastname).catch((error) => {
          if (error.response) {
            setStatus(error.response.data.message);
          } else {
            setStatus("Some error occured. Please try again.");
          }
          setSubmitting(false);
        });
      }}
    >
      {({ errors, status, touched, isSubmitting }) => (
        <Form>
          <div className="flex gap-2">
            <Label>
              <span>{t("First name")}:</span>
              <Field
                className="mt-1"
                as={Input}
                name="username"
                type="text"
                placeholder={t("Max")}
              />
              {errors.username && touched.username ? (
                <div>
                  <HelperText valid={false}>{errors.username}</HelperText>
                </div>
              ) : null}
            </Label>
            <Label>
              <span>{t("Last name")}:</span>
              <Field
                className="mt-1"
                as={Input}
                name="lastname"
                type="text"
                placeholder={t("Mustermann")}
              />
              {errors.lastname && touched.lastname ? (
                <div>
                  <HelperText valid={false}>{errors.lastname}</HelperText>
                </div>
              ) : null}
            </Label>

          </div>

          <Label className="mt-4">
            <span>{t("Email")}:</span>
            <Field
              className="mt-1"
              as={Input}
              name="email"
              type="email"
              placeholder="max.mustermann@gmail.com"
            />
            {errors.email && touched.email ? (
              <div>
                <HelperText valid={false}>{t(errors.email)}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="mt-4">
            <span>{t("Password")}:</span>
            <Field
              className="mt-1"
              as={Input}
              name="password"
              type="password"
              placeholder="***************"
            />
            {errors.password && touched.password ? (
              <div>
                <HelperText valid={false}>{t(errors.password)}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="mt-6 flex flex-col" check>
            <div className="flex flex-none items-center">
              <Field as={Input} name="customCheckLogin" type="checkbox" />
              <div className="ml-2">
                {t("I agree to the")} <Link className="underline" to="/datenschutz">{t("privacy policy")}</Link> zu.
              </div>
            </div>
            {errors.customCheckLogin && touched.customCheckLogin ? (
              <div className="flex flex-none items-center w-full">
                <HelperText valid={false}>{errors.customCheckLogin}</HelperText>
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
            {t("Create Account")}
          </Button>
          {status && <HelperText valid={false}>{status}</HelperText>}
        </Form>
      )}
    </Formik>
  );
}

export default CreateAccountForm;
