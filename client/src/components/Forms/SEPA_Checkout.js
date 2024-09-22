import React, { useState, useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, HelperText, Label, Textarea, Button } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../context/AuthContext";
import { stripeService } from "./../../services/stripe.service";
import { useStripe, useElements, IbanElement } from "@stripe/react-stripe-js";
import { SnackbarContext } from "../../context/SnackbarContext";

// import "./IbanFormStyles.css";

// Custom styling can be passed as options when creating an Element.
const IBAN_STYLE = {
  base: {
    color: "#32325d",
    fontSize: "16px",
    "::placeholder": {
      color: "#aab7c4",
    },
    ":-webkit-autofill": {
      color: "#32325d",
    },
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a",
    ":-webkit-autofill": {
      color: "#fa755a",
    },
  },
};

const IBAN_ELEMENT_OPTIONS = {
  supportedCountries: ["SEPA"],
  // Elements can use a placeholder as an example IBAN that reflects
  // the IBAN format of your customer's country. If you know your
  // customer's country, we recommend that you pass it to the Element as the
  // placeholderCountry.
  placeholderCountry: "DE",
  style: IBAN_STYLE,
};

export default function IbanForm({
  setSepaPaymentId,
  handleSubmitSEPA,
  callback,
  userEmail,
}) {
  const stripe = useStripe();
  const { user } = useContext(AuthContext);
  const elements = useElements();
  const [consent, setConsent] = useState(false);
  const [required, setRequired] = useState(false);
  const { openSnackbar } = useContext(SnackbarContext);
  const [cardError, setCardError] = useState(null);
  const { t } = useTranslation();
  const handleSubmit = async (accountholder_name, email, address) => {
    if (!consent) {
      setRequired(true);
      return;
    }
    setRequired(false);
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const iban = elements.getElement(IbanElement);
    const freshSepaClientSecret = await stripeService.getSepaClientSecret(
      email
    );
    const result = await stripe.confirmSepaDebitSetup(freshSepaClientSecret, {
      payment_method: {
        sepa_debit: iban,
        billing_details: {
          name: accountholder_name,
          email: userEmail,
        },
      },
    });
    if (result.error) {
      // Show error to your customer.
      return { data: result.error.message, flag: false };
    } else {
      setSepaPaymentId(result.setupIntent.payment_method);
      return {
        data: await handleSubmitSEPA(
          result.setupIntent.payment_method,
          address
        ),
        flag: true,
      };
    }
  };
  return (
    <div className="mb-4 py-3 bg-white rounded-lg dark:bg-gray-800">
      <Formik
        initialValues={{
          accountholder_name: user.name,
          email: userEmail,
          address: "",
          // country: "DE",
        }}
        validationSchema={Yup.object().shape({
          accountholder_name: Yup.string().required("Name is required"),
          email: Yup.string().required("email is required"),
          address: Yup.string().required("address is required"),
          // country: Yup.string().required("Country is required"),
        })}
        onSubmit={(
          { accountholder_name, email, address },
          { setStatus, setSubmitting }
        ) => {
          setSubmitting(true);
          handleSubmit(accountholder_name, email, address)
            .then((data) => {
              if (data.flag) {
                setSubmitting(false);
                callback(data.data);
                return;
              }
              throw new Error();
            })
            .catch((err) => {
              openSnackbar(t("Something Goes Wrong!"), "danger", 3000);
            });
        }}
      >
        {({ errors, status, touched, isSubmitting }) => (
          <Form>
            <Label className="-mt-2">
              <span>{t("Your Name")}:</span>
              <Field
                className="mt-1"
                as={Input}
                name="accountholder_name"
                type="text"
                placeholder={t("Jenny Rosen")}
              />
              {errors.accountholder_name && touched.accountholder_name ? (
                <HelperText valid={false}>
                  {errors.accountholder_name}
                </HelperText>
              ) : null}
            </Label>

            <Label className="mt-4">
              <span>{t("Email Address")}:</span>
              <Field
                className="mt-1"
                as={Input}
                // rows="3"
                disabled
                name="email"
                placeholder={t("Enter Email Address")}
              />
              {errors.email && touched.email ? (
                <HelperText valid={false}>{errors.email}</HelperText>
              ) : null}
            </Label>

            <Label className="mt-4">
              <span>{t("Billing Address")}:</span>
              <Field
                className="mt-1"
                as={Textarea}
                rows="3"
                name="address"
                placeholder={t("Enter Billing Address")}
              />
              {errors.address && touched.address ? (
                <HelperText valid={false}>{errors.address}</HelperText>
              ) : null}
            </Label>

            <Label className="mt-4">
              <span>{t("IBAN Number")}:</span>

              <IbanElement
                onChange={(res) => {
                  setCardError(res.error);
                }}
                options={IBAN_ELEMENT_OPTIONS}
                className="mt-1 p-3 bg-white block w-full dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              />
              {cardError ? (
                <HelperText valid={false}>{cardError.message}</HelperText>
              ) : null}
            </Label>
            {/* <HelperText valid={true}>
              Use any IBAN test number, eg: AT611904300234573201
            </HelperText> */}
            <div className="flex">
              <Input
                value={consent}
                onChange={() => setConsent(!consent) & setRequired(false)}
                className="mt-6"
                type="checkbox"
              ></Input>
              <span className="ml-2 mt-6 text-xs leading-4">
                Hiermit bestätige ich, die{" "}
                <a target="_blank" href="/agb">
                  Allgemeinen Geschäftsbedingungen
                </a>{" "}
                {"/"}{" "}
                <a target="_blank" href="/widerrufsbelehrung">
                  Widerrufsbelehrung
                </a>{" "}
                gelesen zu haben und akzeptiere diese.
              </span>
            </div>
            {required && (
              <HelperText className="mt-2" valid={false}>
                {t("Required")}
              </HelperText>
            )}

            <Button
              className="mt-6"
              block
              type="submit"
              value="submit"
              disabled={!stripe || isSubmitting}
            >
              {t("Complete Payment")}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
