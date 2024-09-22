import React, { useRef, useEffect, useState, useContext } from "react";
import { stripeService } from "../../services";
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
  const plainId = props.paypalId;
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
        createSubscription: function (data, actions) {
          openSnackbar(t("Updating subscription..."), "neutral");
          return actions.subscription.create({
            //Id of rent premium package of sandbox account for testing purpose//
            // plan_id: "P-1AV43823TR686664UMG466WQ",
            // plan_id: "P-0RP141522N217154YMN3YXJQ",
            plan_id: plainId,
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
          stripeService
            .createPaypalSubscription(
              props.type,
              props.uniqId,
              data.subscriptionID
            )
            .then(() => {
              openSnackbar(t("Payment Approved"), "success", 3000);
              setTimeout(() => {
                history.push("/app");
                history.replace("/app/userLists");
              }, 1500);
            })
            .catch((error) => {
              console.log("error in paypal", error);
            });
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
