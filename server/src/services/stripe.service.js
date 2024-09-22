const config = require('../config/config');
const Stripe = require('stripe');
const stripe = Stripe(config.stripe.secret);
const httpStatus = require('http-status');
const axios = require('axios');
const qs = require('qs');
const ApiError = require('../utils/ApiError');
let stripeProducts;
let stripePrices;

/**
 * Get products
 * @returns {List<Object>} stripeProducts
 */
const getProducts = async () => {
  ////////////Stripe Api///////////////
  const products = await stripe.products.list();

  const stripeProducts = products.data;
  return stripeProducts;
};

/**
 *
 * @param {*} products
 * @returns
 */
const setupSEPACustomer = async (customerId) => {
  try {
    const setupIntent = await stripe.setupIntents.create({
      payment_method_types: ['sepa_debit'],
      customer: customerId,
    });
    const clientSecret = setupIntent.client_secret;
    return clientSecret;
  } catch (er) {
    console.log(er.message);
  }
};

/**
 * Create products
 * @param {List<Object>} products
 * @returns {List<Object>} stripeProducts
 */
const createProducts = async (products) => {
  const stripeProducts = [];
  products.forEach(async (item) => {
    const stripeProduct = await stripe.products.create(item.product);
    stripeProducts.push(stripeProduct);
  });
  return stripeProducts;
};

/**
 * Update products
 * @param {List<Object>} products
 * @returns {List<Object>} stripeProducts
 */
const updateProducts = async (products) => {
  const stripeProducts = [];
  const stripeProductsOld = await getProducts();
  if (!stripeProductsOld || stripeProductsOld.length === 0) {
    return createProducts(products);
  }
  products.forEach(async (item) => {
    const stripeProductOld = stripeProductsOld.find((itemOld) => itemOld.metadata.type === item.product.metadata.type);
    if (stripeProductOld) {
      const stripeProduct = await stripe.products.update(stripeProductOld.id, { ...item.products });
      stripeProducts.push(stripeProduct);
    } else {
      const stripeProduct = await stripe.products.create(item.product);
      stripeProducts.push(stripeProduct);
    }
  });
  return stripeProducts;
};

/**
 * Get prices
 * @returns {List<Object>} stripePrices
 */
const getPrices = async () => {
  const prices = await stripe.prices.list();
  const stripePrices = prices.data;
  return stripePrices;
};

/**
 * Create prices
 * @param {List<Object>} products
 * @param {List<Object>} stripeProducts
 * @returns {List<Object>} stripePrices
 */
const createPrices = async (products, stripeProducts) => {
  const stripePrices = [];
  products.forEach(async (item) => {
    const stripeProduct = stripeProducts.find((itemOld) => itemOld.metadata.type === item.price.metadata.type);
    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      ...item.price,
    });
    stripePrices.push(stripePrice);
  });
  return stripePrices;
};

/**
 * Update prices
 * @param {List<Object>} products
 * @param {List<Object>} stripeProducts
 * @returns {List<Object>} stripePrices
 */
const updatePrices = async (products, stripeProducts) => {
  const stripePricesOld = await getPrices();
  if (!stripePricesOld || stripePricesOld.length === 0) {
    return createPrices(products, stripeProducts);
  }
  return stripePricesOld;
};

/**
 * Setup stripe products
 * NOT RECOMMENDED : Use Stripe Dashboard instead
 * Cannout update/delete prices using api
 * Cannot delete products using api
 * Use only for first time product creation
 */
const setupStripeProducts = async () => {
  stripeProducts = await updateProducts(products);
  stripePrices = await updatePrices(products, stripeProducts);
};

/**
 * Load stripe products
 */
const loadStripeProducts = async () => {
  stripeProducts = await getProducts();
  stripePrices = await getPrices();
};

/**
 * Get stripe products
 * @returns {List<Object>}
 */
const getStripeProducts = async () => {
  return stripeProducts;
  // return paypalProducts;
};

/**
 * Get stripe prices
 * @returns {List<Object>}
 */
const getStripePrices = async () => {
  return stripePrices;
};

/**
 * Get stripe product from product Id
 * @returns {Object}
 */
const getProductFromProductId = async (productId) => {
  try {
    const product = stripeProducts.find((product) => product.id === productId);
    return product;
  } catch (er) {
    console.log(er.message);
  }
};

/**
 * Create customer
 * @param {String} name
 * @param {String} email
 * @returns {Promise<Object>}
 */
const createCustomer = async (name, email) => {
  try {
    const customer = await stripe.customers.create({
      name: name,
      email: email,
    });
    return customer;
  } catch (er) {
    console.log(er.message);
  }
};

/**
 * Get customer
 * @param {String} stripeId
 * @returns {Promise<Object>}
 */
const getCustomer = async (stripeId) => {
  try {
    const customer = await stripe.customers.retrieve(stripeId);
    return customer;
  } catch (er) {
    console.log(er.message);
  }
};

/**
 * Update customer
 * @param {String} stripeId
 * @param {String} name
 * @param {String} email
 * @returns {Promise<Object>}
 */
const updateCustomer = async (stripeId, name, email) => {
  try {
    const customer = await stripe.customers.update(stripeId, {
      name: name,
      email: email,
    });
    return customer;
  } catch (er) {
    console.log(er.message);
  }
};

/**
 * Delete customer
 * @param {String} stripeId
 * @returns {Promise<Object>}
 */
const deleteCustomer = async (stripeId) => {
  try {
    const deleted = await stripe.customers.del(stripeId);
    return deleted;
  } catch (er) {
    console.log(er.message);
  }
};

/**
 * Get payment method
 * @param {String} stripeId
 * @returns {Promise<Object>}
 */
const getPaymentMethod = async (paymentMethodId) => {
  let paymentMethod = '';
  try {
    paymentMethod = await stripe.paymentMethods.retrieve(paymentMethodId);
    return paymentMethod;
  } catch (er) {
    console.log(er.message, 'getPaymentMethod');
  }
  return paymentMethod;
};

/**
 * Attach payment method
 * @param {String} stripeId
 * @param {String} paymentMethodId
 * @returns {Promise<Object>}
 */
const attachPaymentMethod = async (stripeId, paymentMethodId, address) => {
  let error = false;
  try {
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: stripeId,
    });
    await stripe.customers.update(stripeId, {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
      address: address,
    });
  } catch (er) {
    console.log('ERROR from attach Payment Method', er);
    error = true;
    // console.log(er.message, 'atach');
  }
  return error;
};

/**
 * Detach payment method
 * @param {String} stripeId
 * @param {String} paymentMethodId
 * @returns {Promise<Object>}
 */
const detachPaymentMethod = async (stripeId, paymentMethodId) => {
  try {
    await stripe.paymentMethods.detach(paymentMethodId);
  } catch (er) {
    return res.status(404).json({ message: 'The payment method you provided is not attached to a customer' });
  }
  await stripe.customers.update(stripeId, {
    invoice_settings: {
      default_payment_method: null,
    },
  });
};

/**
 * Create subscription
 * @param {String} stripeId
 * @param {String} subscriptionType
 * @returns {Promise<Object>}
 */
const createSubscription = async (stripeId, subscriptionType) => {
  console.log('subscriptionType', subscriptionType);
  try {
    const price = stripePrices.find((price) => price.product === subscriptionType);
    if (!price) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Subscription type not found');
    }
    const subscription = await stripe.subscriptions.create({
      customer: stripeId,
      items: [
        {
          price: price.id,
        },
      ],
      expand: ['latest_invoice.payment_intent'],
    });
    if (subscription.latest_invoice.payment_intent.status === 'requires_payment_method') {
      await stripe.subscriptions.del(subscription.id);
      throw new ApiError(httpStatus.BAD_REQUEST, subscription.latest_invoice.payment_intent.last_payment_error.message);
    }
    return subscription;
  } catch (er) {
    console.log(er.message, 'create');
  }
  return false;
};

/**
 * Update subscription
 * @param {String} subscriptionId
 * @param {String} subscriptionType
 * @returns {Promise<Object>}
 */
const updateSubscription = async (subscriptionId, subscriptionType) => {
  try {
    const price = stripePrices.find((price) => price.metadata.type === subscriptionType);
    if (!price) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Subscription type not found');
    }
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    const updatedSubscription = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: false,
      items: [
        {
          id: subscription.items.data[0].id,
          price: price.id,
        },
      ],
      expand: ['latest_invoice.payment_intent'],
    });
    return updatedSubscription;
  } catch (er) {
    console.log(er.message, 'update');
  }
  return false;
};

/**
 * Delete subscription
 * @param {String} subscriptionId
 * @returns {Promise<Object>}
 */
const deleteSubscription = async (data) => {
  try {
    const subscription = await stripe.subscriptions.retrieve(data);
    if (!subscription) {
      try {
        let tokenRes = await axios({
          method: 'post',
          url: 'https://api-m.paypal.com/v1/oauth2/token',
          data: qs.stringify({
            grant_type: 'client_credentials',
          }),
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          auth: {
            username: process.env.PAYPAL_CLIENT_ID,
            password: process.env.PAYPAL_CLIENT_SECRET,
          },
        });
        await axios({
          method: 'post',
          url: `https://api-m.paypal.com/v1/billing/subscriptions/${data.subscription}/cancel`,
          data: {
            reason: 'sub is canceled from api',
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tokenRes.data.access_token}`,
          },
        });
      } catch (er) {
        throw new ApiError(httpStatus.NOT_FOUND, 'subscription not found');
      }
      return;
    }
    await stripe.subscriptions.del(data);
  } catch (er) {
    console.log(data, 'delete sub');
  }
};
const cancelAutoRenew = async (data) => {
  try {
    // await stripe.subscriptions.retrieve(data.subscription.id);
    await stripe.subscriptions.del(data.subscription.id);
  } catch (er) {
    try {
      let tokenRes = await axios({
        method: 'post',
        url: 'https://api-m.paypal.com/v1/oauth2/token',
        data: qs.stringify({
          grant_type: 'client_credentials',
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        auth: {
          username: process.env.PAYPAL_CLIENT_ID,
          password: process.env.PAYPAL_CLIENT_SECRET,
        },
      });
      await axios({
        method: 'post',
        url: `https://api-m.paypal.com/v1/billing/subscriptions/${data.subscription.id}/cancel`,
        data: {
          reason: `the user with id: "${data.uniqId}" cancel auto renew`,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenRes.data.access_token}`,
        },
      });
    } catch (er) {
      throw new ApiError(httpStatus.NOT_FOUND, 'subscription not found');
    }
  }
};

const paymentIntents = async (id) => {
  // const order = await stripe.orders.create({
  //   currency: 'eur',
  //   line_items: [{ product: "prod_LnyVSQLAcnQcpE", quantity: 1 }],
  //   payment: {
  //     settings: {
  //       payment_method_types: ['card'],
  //     },
  //   },
  // });
  // await stripe.orders.update(
  //   order.id,
  //   {customer: req.body.customerId}
  // );
  // res.send({
  //   clientSecret: order.client_secret,
  // });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 50,
    currency: 'EUR',
    description: 'Valuation One-Time-Payment',
    payment_method: id,
    confirm: true,
  });
  return paymentIntent;
};

module.exports = {
  paymentIntents,
  getProducts,
  setupSEPACustomer,
  createProducts,
  updateProducts,
  getPrices,
  createPrices,
  updatePrices,
  setupStripeProducts,
  loadStripeProducts,
  getStripeProducts,
  getStripePrices,
  getProductFromProductId,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getPaymentMethod,
  attachPaymentMethod,
  detachPaymentMethod,
  createSubscription,
  updateSubscription,
  deleteSubscription,
  getCustomer,
  cancelAutoRenew,
};
