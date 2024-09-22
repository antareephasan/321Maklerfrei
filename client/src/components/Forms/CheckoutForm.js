import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import {
  Input,
  HelperText,
  Label,
  Textarea,
  Button,
  Select,
} from "@windmill/react-ui";
import { stripeService } from "../../services";

function BillingForm({ callback, uniqId }) {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [formError, setFormError] = useState(null);
  const [saved, setSaved] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (username, address, country) => {
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    return stripe
      .createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: username,
          address: {
            line1: address,
            country: country,
          },
        },
      })
      .then(({ error, paymentMethod }) => {
        if (error) {
          throw error;
        } else {
          return stripeService
            .updatePaymentMethod(
              paymentMethod.id,
              { line1: address, country: country },
              uniqId
            )
            .then((user) => {
              setSaved(true);
              return user;
            });
        }
      });
  };

  return (
    <>
      <div className="mb-4 py-3 bg-white rounded-lg dark:bg-gray-800">
        <Formik
          initialValues={{
            username: "",
            address: "",
            country: "US",
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Name is required"),
            address: Yup.string().required("Address is required"),
            country: Yup.string().required("Country is required"),
          })}
          onSubmit={(
            { username, address, country },
            { setStatus, setSubmitting }
          ) => {
            setSubmitting(true);
            setFormError(null);
            setSaved(false);
            setStatus();
            handleSubmit(username, address, country)
              .then((user) => {
                setSubmitting(false);
                callback(user);
              })
              .catch((err) => {
                setSubmitting(false);
                if (err.response && err.response.data.message) {
                  setFormError(err.response.data.message);
                } else {
                  setFormError("Some error occured!");
                }
              });
          }}
        >
          {({ errors, status, touched, isSubmitting }) => (
            <Form>
              <Label>
                <span>{t("Your Name")}:</span>
                <Field
                  className="mt-1"
                  as={Input}
                  name="username"
                  type="text"
                  placeholder={t("enter your name")}
                />
                {errors.username && touched.username ? (
                  <HelperText valid={false}>{errors.username}</HelperText>
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
                <span>{t("Card Details")}:</span>
                <CardElement
                  onChange={(res) => {
                    setCardError(res.error);
                  }}
                  className="mt-1 p-3 bg-white block w-full dark:text-gray-300 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                />
                {cardError ? (
                  <HelperText valid={false}>{cardError.message}</HelperText>
                ) : null}
              </Label>

              {/* <HelperText valid={true}>
                Use any stripe test card, eg: 4242 4242 4242 4242
              </HelperText> */}

              <Button
                className="mt-6"
                block
                type="submit"
                value="submit"
                disabled={!stripe || isSubmitting}
              >
                {t("Complete Payment")}
              </Button>
              {status && (
                <HelperText valid={false}>{status.message}</HelperText>
              )}
              {formError && <HelperText valid={false}>{formError}</HelperText>}
              {saved && <HelperText valid={true}>Saved!</HelperText>}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default BillingForm;
