const Joi = require('joi');

const getStripeProducts = {
  body: Joi.object().keys({}),
};

const updatePaymentMethod = {
  body: Joi.object().keys({
    paymentMethodId: Joi.string().required(),
    address: Joi.object().keys({
      line1: Joi.string().required(),
      country: Joi.string().required(),
    }),
    uniqId: Joi.string().required(),
    sepa: Joi.boolean()
  }),
};

const createSubscription = {
  body: Joi.object().keys({
    subscriptionType: Joi.string().required(),
    uniqId: Joi.string().required(),
    stripeId: Joi.string(),
  }),
};

const completeSubscription = {
  body: Joi.object().keys({
    subscriptionId: Joi.string().required(),
    productId: Joi.string().required(),
    uniqId: Joi.string().required(),
  }),
};
const pauseSubscription = {
  body: Joi.object().keys({
    uniqId: Joi.string().required(),
  }),
};
const cancelAutoRenew = {
  body: Joi.object().keys({
    uniqId: Joi.string().required(),
  }),
};

const deleteSubscription = {
  body: Joi.object().keys({
    subscriptionId: Joi.string().required(),
  }),
};

module.exports = {
  getStripeProducts,
  updatePaymentMethod,
  createSubscription,
  completeSubscription,
  deleteSubscription,
  pauseSubscription,
  cancelAutoRenew
};
