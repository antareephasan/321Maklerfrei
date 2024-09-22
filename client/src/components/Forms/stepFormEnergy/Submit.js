import React, { useState, useContext, useEffect } from "react";

import SectionTitle from "../../Typography/SectionTitle";
import BillingForm from "../../Forms/BillingForm";
import { PricingCardSale } from "../../Cards/PricingCardCheckout";
import { SnackbarContext } from "../../../context/SnackbarContext";
import { StripeContext } from "../../../context/StripeContext";
import { stripeService } from "../../../services";
import { HelperText } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { useStripe } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";

function Products({ listData, uniqId, enabled, PricingCardCallback, pages }) {
  const { products } = useContext(StripeContext);
  let description;
  if (listData.listingType === "For Rent") {
    description = "Sale";
  } else {
    description = "Rent";
  }
  return (
    <div className={`${pages ? 'block' : 'grid' } gap-6 mb-4 md:grid-cols-3`}>
      {products &&
        products.map(function (product, i) {
          if (
            product.packageDescription.indexOf(description) > -1
          ) {
            return null;
          }
          return (
            ////Paypal card/////
            <PricingCardSale
              key={i}
              title={product.packageName}
              type={product.subscriptionType}
              paypalId={product.paypalId}
              stripeId={product.stripeId}
              value={
                product.price + " " + "€"
              }
              enabled={enabled}
              listData={listData}
              uniqId={uniqId}
              callback={PricingCardCallback}
            />
          );
        })}
    </div>
  );
}

export const Submit = ({ listData, setListData, pages }) => {
  const stripe = useStripe();
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext);
  const [enabled, setEnabled] = useState(true);
  const [error, setError] = useState(null);
  const [type, setType] = useState("");
  const [value, setValue] = useState();
  const [paypalId, setPaypalId] = useState();
  const [stripeId, setStripeId] = useState();
  const history = useHistory();
  const { t } = useTranslation();
  
  useEffect(() => {
    if (enabled) {
      closeSnackbar();
    } else {
      openSnackbar(t("Updating subscription..."));
    }
  }, [enabled, openSnackbar, closeSnackbar]);

  const handlePaymentThatRequiresCustomerAction = (subscription) => {
    if (!subscription) {
      return;
    }
    if (subscription && subscription.status === "active") {
      return subscription;
    }
    const paymentIntent = subscription.latest_invoice.payment_intent;
    if (paymentIntent.status === "requires_action") {
      return stripe
        .confirmCardPayment(paymentIntent.client_secret, {
          payment_method: listData.stripePaymentMethod.id,
        })
        .then((result) => {
          if (result.error) {
            throw Object.assign(new Error(result.error.message), {
              response: { data: { message: result.error.message } },
            });
          } else {
            if (result.paymentIntent.status === "succeeded") {
              return subscription;
            } else {
              throw Object.assign(new Error("Some error occured"));
            }
          }
        })
        .catch((error) => {
          stripeService.deleteSubscription(subscription.id);
          throw error;
        });
    } else {
      return subscription;
    }
  };

  const onSubscriptionComplete = (subscription, uniqId) => {
    if (!subscription) return;
    if (subscription.status === "active") {
      return stripeService.completeSubscription(
        subscription.id,
        subscription.items.data[0].price.product,
        uniqId
      );
    } else {
      throw Object.assign(new Error("Some error occured"));
    }
  };

  const [errorMessage, setErrorMessage] = useState(false);
  const handleSubscription = async (type, uniqId, stripeId) => {
    setErrorMessage(false);
    setEnabled(false);
    setError(null);
    await stripeService
      .createSubscription(type, uniqId, stripeId)
      .then(handlePaymentThatRequiresCustomerAction)
      .then((subscription) => onSubscriptionComplete(subscription, uniqId))
      .then(() => {
        if(!listData) {
          throw new Error()
        }else{
          openSnackbar(t("Your Listing will publish soon!"), 'success', 3000);
          setTimeout(function() {
            history.push("/app");
            history.replace("/app/userLists");
          }, 3000);
        }
      })
      .catch(() => {
        openSnackbar(t("Payment Failed!"), 'danger', 3000);
      });
  };

  const billingFormCallback = (userList) => {
    setListData(userList);
    handleSubscription(type, listData.uniqId, stripeId);
  };
  const PricingCardCallback = (type, uniqId, value, paypalId, stripeId) => {
    setType(type);
    setValue(value);
    setStripeId(stripeId);
    setPaypalId(paypalId);
    setEnabled(true);
  };

  return (
    <>
      {!type ? (
        <div className="px-0 md:px-5 mt-4">
          <SectionTitle>{t("Choose your plan")}</SectionTitle>
          <Products
            pages={pages}
            listData={listData}
            uniqId={listData.uniqId}
            enabled={enabled}
            PricingCardCallback={PricingCardCallback}
          />
          {error && (
            <HelperText valid={false} className="mb-8 text-sm">
              {error}
            </HelperText>
          )}
          {errorMessage && (
            <HelperText valid={false} className="mb-8 text-sm">
              provide Billing details
            </HelperText>
          )}
        </div>
      ) : (
        <div className="px-5 mt-4">
          <SectionTitle>{t("Billing")}</SectionTitle>
            <BillingForm
              uniqId={listData.uniqId}
              callback={billingFormCallback}
              value={value}
              type={type}
              paypalId={paypalId}
              stripeId={stripeId}
            />
        </div>
      )}
    </>
  );
};
