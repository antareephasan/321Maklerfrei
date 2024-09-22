import React, { useState, useContext } from "react";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
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
import PaypalValuation from "../Paypal/PaypalValuation";
import { AuthContext } from "../../context/AuthContext";
import { SnackbarContext } from "../../context/SnackbarContext";
import { useHistory } from "react-router-dom";

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

function BillingFormValuation({ callback, uniqId, value, type, paypalId }) {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [consent, setConsent] = useState(false);
  const [required, setRequired] = useState(false);
  const [formError, setFormError] = useState(null);
  const [option, setOption] = useState("Paypal");
  const { user } = useContext(AuthContext);
  const { openSnackbar } = useContext(SnackbarContext);
  const { t } = useTranslation();
  const history = useHistory();
  const handleOption = (e) => {
    setOption(e.target.value);
  };

  const handleSubmit = async (username, address, country) => {
    if (!consent) {
      setRequired(true);
      return;
    }
    setRequired(false);
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
          email: user.email,
          address: {
            line1: address,
            country: country,
          },
        },
      })
      .then(({ error, paymentMethod }) => {
        return paymentMethod.id
      });
  };

  return (
    <>
      <div className="mb-4 py-3 bg-white rounded-lg dark:bg-gray-800">
        <Formik
          initialValues={{
            username: user.name,
            address: "",
            country: "DE",
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Name is required"),
            address: Yup.string().required("Address is required"),
            country: Yup.string().required("Country is required"),
          })}
          onSubmit={async (
            { username, address, country },
            { setStatus, setSubmitting }
          ) => {
            setSubmitting(true);
            setFormError(null);
            setStatus();
            //return payment intent from the server
            let id = await handleSubmit(username, address, country);
            
            let paymentIntent = await stripeService.createPaymentIntent(id)
           // let paymentIntent = await callback(id);

            await stripe.confirmCardPayment(paymentIntent, {
              payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                  name: user.name,
                  address: {
                    line1: address,
                    country: country,
                  },
                },
              },
            }).then(async ({ error, paymentMethod }) => {
              if (error) {
                throw error;
              } else {
                const user = await stripeService
                  .updatePaymentMethod(
                    paymentMethod.id,
                    { line1: address, country: country },
                    uniqId
                  );
                  //send uniqId to backend
                  await stripeService.sendEmailToDom(uniqId, 'valuation');
                  if(user){
                    setSubmitting(false);
                    openSnackbar(t("Valuation Created!"), 'success', 5000);
                    setTimeout(function() {
                      history.push("/app");
                      history.replace("/app/userLists");
                    }, 5000);
                  }
              }
            }).catch((err) => {
              setSubmitting(false);
              openSnackbar(t("Payment Failed!"), "danger", 3000);
              if (err.response && err.response.data.message) {
                setFormError(err.response.data.message);
              } else {
                setFormError("Some error occured!");
              }
            });

            // handleSubmit(username, address, country)
            //   .then((user) => {
            //     if (!user) {
            //       openSnackbar(t("Payment Failed!"), "danger", 3000);
            //       setSubmitting(false);
            //       return;
            //     }
            //     setSubmitting(false);
            //     callback(user);
            //   })
            //   .catch((err) => {
            //     setSubmitting(false);
            //     openSnackbar(t("Payment Failed!"), "danger", 3000);
            //     if (err.response && err.response.data.message) {
            //       setFormError(err.response.data.message);
            //     } else {
            //       setFormError("Some error occured!");
            //     }
            //   });
          }}
        >
          {({ errors, status, touched, isSubmitting }) => (
            <Form>
              <Label className="">
                <span>{t("Payment method")}:</span>
              </Label>
              <Select
                className="mb-4 mt-1"
                label="payment method"
                name="paymentmethod"
                margin="normal"
                variant="outlined"
                autoComplete="off"
                onChange={(e) => handleOption(e)}
                fullwidth="true"
              >
                <option>{t("Paypal")}</option>
                <option value="Credit Card">{t("Credit Card")}</option>
              </Select>
              {option === "Credit Card" ? (
                <>
                  <Label className="mt-4">
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
                      </a>{" "} {"/"} {" "}
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
                  {/* {<HelperText valid={true}>
                    Use any stripe test card, eg: 4242 4242 4242 4242
                  </HelperText>} */}

                  <Button
                    className="mt-6"
                    block
                    type="submit"
                    value="submit"
                    disabled={!stripe || isSubmitting}
                  >
                    {t("Complete Payment")}
                  </Button>
                </>
              ) : option === "Paypal" ? (
                <PaypalValuation
                  uniqId={uniqId}
                  user = {user}
                />
              ) :  null}
              {status && (
                <HelperText valid={false}>{status.message}</HelperText>
              )}
              {formError && <HelperText valid={false}>{formError}</HelperText>}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default BillingFormValuation;
