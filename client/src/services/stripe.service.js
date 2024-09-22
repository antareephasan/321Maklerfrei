import axios from "axios";
import { config } from "../assets/config/config";

const apiUrl = config.api.url;

const updatePaymentMethod = (paymentMethodId, address, uniqId, sepa) => {
  return axios
    .post(`${apiUrl}/v1/stripe/updatePaymentMethod`, {
      paymentMethodId,
      address,
      uniqId,
      sepa
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

const createSubscription = (subscriptionType, uniqId, stripeId) => {
  return axios
    .post(`${apiUrl}/v1/stripe/create-subscription`, {
      subscriptionType: subscriptionType,
      uniqId: uniqId,
      // subscriptionID: subscriptionID,
      stripeId: stripeId,
    })
    .then((response) => {
      return response.data.subscription;
    });
};
const getSepaClientSecret = (email) => {
  return axios
    .post(`${apiUrl}/v1/stripe/fresh-sepa-client-secret`, {
      email
    })
    .then((response) => {
      return response.data.freshSepaClientSecret;
    });
};

const createPaypalSubscription = (subscriptionType, uniqId, subscriptionID) => {
  return axios
    .post(`${apiUrl}/v1/stripe/create-paypal-subscription`, {
      subscriptionType,
      uniqId,
      subscriptionID
    })
    .then((response) => {
      return response.data.subscription;
    });
};

const completeSubscription = (subscriptionId, productId, uniqId) => {
  return axios
    .post(`${apiUrl}/v1/stripe/complete-subscription`, {
      subscriptionId: subscriptionId,
      productId: productId,
      uniqId: uniqId,
    })
    .then((response) => {
      return response.data.user;
    });
};

//pause subs
const pauseSubscription = (uniqId) => {
  return axios
    .post(`${apiUrl}/v1/stripe/pause-subscription`, {
      uniqId: uniqId,
    })
    .then((response) => {
      return response.data.uniqId;
    });
};
//cancel auto renew
const cancelAutoRenew = (uniqId) => {
  return axios
    .post(`${apiUrl}/v1/stripe/cancel-auto-renew`, {
      uniqId: uniqId,
    })
    .then((response) => {
      return response.data.uniqId;
    });
};
const unpauseSubscription = (uniqId) => {
  return axios
    .post(`${apiUrl}/v1/stripe/unpause-subscription`, {
      uniqId: uniqId,
    })
    .then((response) => {
      return response.data.uniqId;
    });
};

const deleteSubscription = (subscriptionId) => {
  return axios
    .post(`${apiUrl}/v1/stripe/delete-subscription`, {
      subscriptionId: subscriptionId,
    })
    .catch((err) => {});
};
// Create a Payment Intent (returns the client with a temporary secret)
const createPaymentIntent = async (id) => {
  return axios
    .post(`${apiUrl}/v1/stripe/create-payment-intent`, {
      id
    })
    .catch((err) => {
      console.log(err.message);
    });
};
const sendEmailToDom = async (uniqId, type) => {
  return axios
    .post(`${apiUrl}/v1/stripe/send-email-to-dom`, {
      uniqId, type
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const stripeService = {
  updatePaymentMethod,
  createSubscription,
  completeSubscription,
  pauseSubscription,
  deleteSubscription,
  unpauseSubscription,
  createPaypalSubscription,
  cancelAutoRenew,
  getSepaClientSecret,
  sendEmailToDom,
  createPaymentIntent
};
