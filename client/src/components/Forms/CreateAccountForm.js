import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
import { Input, Label, HelperText, Button } from "@windmill/react-ui";
import { Link, useHistory } from "react-router-dom";
import { dictionary } from "../../resources/multiLanguages";

function CreateAccountForm() {
  const { register } = useContext(AuthContext);
  const { t } = useTranslation();
  const languageReducer = "de";
  const history = useHistory();
  
  return (
    <Formik
      initialValues={{
        username: "",
        lastname: "",
        email: "",
        phone_number: "",
        password: "",
        confirmPassword: "",
        customCheckLogin: false,
        role: "USER"
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required(dictionary["createAccountForm"][languageReducer]["required"]),
        email: Yup.string().email().required(dictionary["createAccountForm"][languageReducer]["required"]),
        password: Yup.string()
          .min(8)
          .matches("^.*[0-9].*$", (dictionary["createAccountForm"][languageReducer]["atleastOneNumberRequired"]))
          .matches("^.*[a-zA-Z].*$", (dictionary["createAccountForm"][languageReducer]["atleastOneNumberRequired"]))
          .required(t("Required")),
        confirmPassword: Yup.string()
          .min(8)
          .matches("^.*[0-9].*$", (dictionary["createAccountForm"][languageReducer]["atleastOneNumberRequired"]))
          .matches("^.*[a-zA-Z].*$", (dictionary["createAccountForm"][languageReducer]["atleastOneNumberRequired"]))
          .required(dictionary["createAccountForm"][languageReducer]["required"]),
        customCheckLogin: Yup.boolean().oneOf(
          [true],
          (dictionary["createAccountForm"][languageReducer]["mustAgreePrivacyPolicy"])
        ),
        lastname: Yup.string().required(dictionary["createAccountForm"][languageReducer]["required"]),
      })}
      onSubmit={(
        { username, email, phone_number, password, confirmPassword, lastname, role },
        { setStatus, setSubmitting }
      ) => {
        setSubmitting(true);
        setStatus();
        register(username, email, phone_number, password, confirmPassword, lastname, role)
        .then((response) => {
          localStorage.setItem("active_email", email);
          history.push("/auth/active-account");   
          console.log("response", response.data)
        })
        .catch((error) => {
          if (error.response) {
            setStatus(error.response.data.message);
          } else {
            setStatus(dictionary["createAccountForm"][languageReducer]["errorMessage"]);
          }
          setSubmitting(false);
        });
      }}
    >
      {({ errors, status, touched, isSubmitting }) => (
        <Form>
          <div className="flex gap-2">
            <Label>
              <span>{dictionary["createAccountForm"][languageReducer]["firstName"]}:</span>
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
              <span>{dictionary["createAccountForm"][languageReducer]["lastName"]}:</span>
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
            <span>{dictionary["createAccountForm"][languageReducer]["email"]}:</span>
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
            <span>{dictionary["createAccountForm"][languageReducer]["phone"]}:</span>
            <Field
              className="mt-1"
              as={Input}
              name="phone_number"
              type="text"
              placeholder="+40 449****"
            />
            {errors.phone_number && touched.phone_number ? (
              <div>
                <HelperText valid={false}>{t(errors.phone_number)}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="mt-4">
            <span>{dictionary["createAccountForm"][languageReducer]["password"]}:</span>
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
          <Label className="mt-4">
            <span>{dictionary["createAccountForm"][languageReducer]["confirmPassword"]}:</span>
            <Field
              className="mt-1"
              as={Input}
              name="confirmPassword"
              type="password"
              placeholder="***************"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div>
                <HelperText valid={false}>{t(errors.confirmPassword)}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="mt-6 flex flex-col" check>
            <div className="flex flex-none items-center">
              <Field as={Input} name="customCheckLogin" type="checkbox" />
              <div className="ml-2">
                {dictionary["createAccountForm"][languageReducer]["iagreetothe"]} <Link className="underline" to="/datenschutz">{dictionary["createAccountForm"][languageReducer]["privacyPolicy"]}</Link>
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
            {dictionary["createAccountForm"][languageReducer]["createAccount"]}
          </Button>
          {status && <HelperText valid={false}>{status}</HelperText>}
        </Form>
      )}
    </Formik>
  );
}

export default CreateAccountForm;
