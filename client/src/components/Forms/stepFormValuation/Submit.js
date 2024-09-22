import React, { useState, useContext, useEffect } from "react";

import SectionTitle from "../../Typography/SectionTitle";
import BillingFormValuation from "../../Forms/BillingFormValuation";
import { PricingCardValuation } from "../../Cards/PricingCardVE";
import { SnackbarContext } from "../../../context/SnackbarContext";
import { stripeService } from "../../../services";
import { HelperText } from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { useStripe } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";

function Products({ listData, uniqId, enabled, PricingCardCallback, pages }) {
  return (
    <div className={`${pages ? 'block' : 'grid' } gap-6 mb-4 md:grid-cols-3`}>
      <PricingCardValuation
        title={"Valuation Package"}
        type={"valuation"}
        stripeId={"prod_LnyVSQLAcnQcpE"}
        value={`29 €`}
        enabled={enabled}
        listData={listData}
        uniqId={uniqId}
        callback={PricingCardCallback}
      />
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

  const [errorMessage, setErrorMessage] = useState(false);

  const handlePayment = async (id) => {
    setErrorMessage(false);
    setEnabled(false);
    setError(null);
    try{
      return await stripeService.createPaymentIntent(id)

    }catch(er){
      console.log(er.message);
    }
  };

  const billingFormCallback = (userList) => {
    setListData(userList);
    handlePayment(listData.uniqId);
  };
  const PricingCardCallback = (type, uniqId, value, stripeId) => {
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
            <BillingFormValuation
              uniqId={listData.uniqId}
              callback={handlePayment}
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
