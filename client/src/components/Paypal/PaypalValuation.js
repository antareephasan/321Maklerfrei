import React, { useRef, useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { SnackbarContext } from "../../context/SnackbarContext";
import { useTranslation } from "react-i18next";
import { Input, HelperText } from "@windmill/react-ui";
export default function Paypal(props) {
  const [error, setError] = useState(false);
  const paypalRef = useRef();
  const checkBoxRef = useRef();
  const history = useHistory();
  const { t } = useTranslation();
  const { openSnackbar } = useContext(SnackbarContext);
  const [consent, setConsent] = useState(false);
  const [required, setRequired] = useState(true);
  
  useEffect(() => {
    window.paypal
      .Buttons({
        locale: "de_DE",
        style: {
          size: "small",
          color: "gold",
          shape: "rect",
          label: "checkout",
        },
        createOrder: function (data, actions) {
          openSnackbar(t("Updating..."), "neutral");
          
          return actions.order.create({
            "purchase_units": [{
               "amount": {
                 "currency_code": "EUR",
                 "value": "29",
                 "breakdown": {
                   "item_total": {  /* Required when including the `items` array */
                     "currency_code": "EUR",
                     "value": "29"
                   }
                 }
               },
               "items": [
                 {
                   "name": "Valuation Package", /* Shows within upper-right dropdown during payment approval */
                   "description": "Pay one time for valuation", /* Item details will also be in the completed paypal.com transaction view */
                   "unit_amount": {
                     "currency_code": "EUR",
                     "value": "29"
                   },
                   "quantity": "1"
                 },
               ]
             }]
         });
        },
        onInit: function (data, actions) {
          // Disable the buttons
          actions.disable();
          checkBoxRef.current.addEventListener("change", function (event) {
            // Enable or disable the button when it is checked or unchecked
            if (event.target.checked) {
              actions.enable();
              setRequired(false);
            } else {
              actions.disable();
              setRequired(true);
            }
          });
        },
        onApprove: function (data, actions) {
            openSnackbar(t("Payment Approved"), "success", 3000);
            setTimeout(() => {
              history.push("/app");
              history.replace("/app/userLists");
            }, 3000);
        },
        onCancel: function (data) {
          // Show a cancel page, or return to cart
          openSnackbar(t("Payment Canceled!"), "warning", 3000);
          // setCanceled(true);
        },
        onerror: function (data) {
          // Show a cancel page, or return to cart
          openSnackbar(t("Something went wrong!"), "danger", 3000);
          // setCanceled(true);
        },
      })
      .render(paypalRef.current);
  }, [error]);

  return (
    <div onFocus={(e) => e.preventDefault()}>
      <div className="flex">
        <Input
          ref={checkBoxRef}
          required
          value={consent}
          onChange={() => setConsent(!consent)}
          className=""
          type="checkbox"
        ></Input>
        <span className="ml-2 text-xs leading-4">
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
        <HelperText className="" valid={false}>
          {t("Required")}
        </HelperText>
      )}
      <div className="mt-4" ref={paypalRef}></div>
    </div>
  );
}
