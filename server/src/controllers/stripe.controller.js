const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService, stripeService, emailService } = require('../services');
const { UserList, UserListValuation } = require('../models');
const { User } = require('../models');
const { generateCognitoToken } = require('../services/flowfact.service');
const axios = require('axios');
const moment = require('moment');

const getStripeProducts = catchAsync(async (req, res) => {
  const stripeProducts = await stripeService.getStripeProducts();
  const stripePrices = await stripeService.getStripePrices();

  const products = [];

  stripePrices.forEach((stripePrice) => {
    const stripeProduct = stripeProducts.find((stripeProduct) => stripeProduct.id === stripePrice.product);
    let product = {};
    product.product = {};
    product.product.name = stripeProduct.name;
    product.product.description = stripeProduct.description;
    product.product.active = stripeProduct.active;
    product.product.metadata = stripeProduct.metadata;
    product.price = {};
    product.price.unit_amount = stripePrice.unit_amount;
    product.price.currency = stripePrice.currency;
    product.price.recurring = {};
    product.price.recurring.interval = stripePrice.recurring.interval;
    product.price.metadata = stripePrice.metadata;
    a = 0;
    product.price.currency_symbol = a
      .toLocaleString('en', { style: 'currency', currency: stripePrice.currency })
      .replace(/\d+([,.]\d+)?/g, '');
    if (!product.price.currency_symbol) {
      product.price.currency_symbol = product.price.currency;
    }

    products.push(product);
  });

  const sortedProducts = products.sort((p1, p2) => p1.price.unit_amount - p2.price.unit_amount);

  res.send({ products: sortedProducts });
});
const updateUserListById = async (userListId, updateBody) => {
  await UserList.findById({ _id: userListId }, async (err, data) => {
    if (err && !data) {
      throw new ApiError(httpStatus.NOT_FOUND, 'UserList not found');
    } else if (data) {
      Object.assign(data, updateBody);
      await data.save();
      return data;
    }
  });
};
const updateUserListBySubscriptionId = async (subscription, updateBody) => {
  try {
    let data = await UserList.findOneAndUpdate(subscription, updateBody);
    return data;
  } catch (er) {
    console.log(er, 'error updateUserListBySubscriptionId');
  }
};
const getSepaClientSecret = async (req, res) => {
  await User.findOne({ email: req.body.email }, async (err, data) => {
    if (err && !data) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    } else if (data) {
      let freshSepaClientSecret = await stripeService.setupSEPACustomer(data.stripeId);
      res.json({
        freshSepaClientSecret,
      });
    }
  });
};

const updatePaymentMethod = catchAsync(async (req, res) => {
  const uniqId = req.body.uniqId;
  UserList.findOne({ uniqId }, async (err, data) => {
    if (err && !data) {
      return res.status(400).json({ message: 'create list first' });
    } else if (data) {
      if (data.stripePaymentMethod) {
        let resErr = await stripeService.detachPaymentMethod(data.stripeId, data.stripePaymentMethod.id);
        updateUserListById(data._id, {
          stripePaymentMethod: null,
        });
        console.log('resErr1', resErr);
        if (resErr) return res.status(404).json({ message: 'Your card was declined' });
      } else if (!data.stripePaymentMethod) {
        console.log('insecpd iuf');
        const paymentMethod = await stripeService.getPaymentMethod(req.body.paymentMethodId);
        console.log('paymentMethod', paymentMethod);
        let resErr = await stripeService.attachPaymentMethod(data.stripeId, req.body.paymentMethodId, req.body.address);
        console.log('resErr2', resErr);

        if (resErr) return res.status(404).json({ message: 'Your card was declined' });
        const updateBody = {
          stripePaymentMethod: {
            id: req.body.paymentMethodId,
            last4: paymentMethod.card ? paymentMethod.card.last4 : paymentMethod.sepa_debit.last4,
          },
        };
        Object.assign(data, updateBody);
        if (req.body.sepa) {
          Object.assign(data, { paymentIsSepa: true });
        } else {
          Object.assign(data, { paymentIsSepa: false });
        }
        await data.save();
        res.send(data);
      } else {
        const message = err.raw ? err.raw.message : 'Some error occured';
        throw new ApiError(httpStatus.BAD_REQUEST, message);
      }
    }
  });
});

// (async()=>{
//   let still = ['SjkHmElvNhY-1',
//     'b9AbxqQClUJ-1',
//     '24gOYGGAEfj-1',
//     'Sc9ZjZN4AgO-1',
//     'ybUx-8opxdz-1',
//     'U0RoO4oHYx--1',
//     'QAp4usevbIm-1',
//     'MOc9rVzyS9L-1',
//     '6VjmrhXp1wj-1',
//     'tH3VScYJwS9-1',
//     'VkNPC8YStm_-1',
//     'GQWj6g0G8h2-1',
//     'HJuNNHELKoL-1'];
//   let x = await UserList.find({subscriptionExpire: true, subscription: { $ne: {subscriptionType: 'free' } }});
//   // let x = await UserList.find({subscriptionExpire: false, subscription: { $ne: {subscriptionType: 'free' } }});
//   x = x.filter( a => !still.includes(a.uniqId))//.map(a => a.uniqId);
//   // console.log(x);
//   // console.log(x.filter( a => !still.includes(a.uniqId)).length);
//   const sleep = ms => new Promise(r => setTimeout(r, ms));

//   for (let index = 0; index < x.length; index++) {
//     // const list = await UserList.findOne({ uniqId: x[index] });
//     const list = x[index];
//     list.status = false;
//     switch (list.subscription.subscriptionType) {
//       case 'basic' :
//         await publishTo4Platforms(list, true, true, false, false);
//         break;
//       case 'medium' :
//         await publishTo4Platforms(list, true, true, true, false);
//         break;
//       case 'premium' :
//         await publishTo4Platforms(list, true, true, true, false);
//         break;

//     }
//     await sleep(10000)
//     console.log(list.uniqId);
//   }

// })()
const createSubscriptionWithPaypal = catchAsync(async (req, res) => {
  const uniqId = req.body.uniqId;

  UserList.findOne({ uniqId }, async (err, data) => {
    if (err && !data) {
      return res.status(400).json({ message: 'creat list first' });
    }

    if (data.subscription.subscriptionType === req.body.subscriptionType) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Subscription plan is already active');
    }

    let subscription;
    await updateUserListById(data._id, {
      subscription: {
        id: req.body.subscriptionID,
        subscriptionType: req.body.subscriptionType,
      },
      subscriptionUpdatedAt: Date.now(),
      subscriptionId: req.body.subscriptionID,
    });
    data.status = true;
    //(data, immoscot, ebay, immowelt, wordpress)
    switch (req.body.subscriptionType) {
      case 'basic':
        await publishTo4Platforms(data, true, true, false, false);
        break;
      case 'medium':
        await publishTo4Platforms(data, true, true, true, false);
        break;
      case 'premium':
        await publishTo4Platforms(data, true, true, true, false);
        let formData = {
          title: data.listingTitle,
          uniqId,
          email: data.formEmail,
        };
        await new emailService({ name: 'Dominik', email: 'buchung@123provisionsfrei.de' }).EmailMePremium(formData);
        break;
    }
    //send email to the user * the listen is activated
    let user = await userService.getUserByEmail(data.email);
    if (!user.emailError) {
      await new emailService({ name: data.contactName, email: data.formEmail, userId: user._id }).ListingActivated(
        data.uniqId
      );
    }
    res.send({ subscription });
  });
});

const createSubscription = catchAsync(async (req, res) => {
  const uniqId = req.body.uniqId;
  console.log('uniqId', uniqId);
  UserList.findOne({ uniqId }, async (err, data) => {
    console.log('data._id', data._id);
    if (err && !data) {
      return res.status(400).json({ message: 'creat list first' });
    }
    if (data.subscription.subscriptionType === req.body.subscriptionType) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Subscription plan is already active');
    }
    if (req.body.subscriptionType === 'free') {
      let subscrip_data = await UserList.findById(data._id);
      let listing_created_date = subscrip_data.updatedAt;
      var expire_date = new Date(listing_created_date);
      expire_date.setDate(expire_date.getDate() + 30);
      if (listing_created_date >= expire_date) {
        await stripeService.deleteSubscription(data.subscription.id);
        await updateUserListById(data._id, {
          subscription: {
            subscriptionType: 'free',
          },
        });
      } else {
        await updateUserListById(data._id, {
          subscription: {
            id: subscrip_data.subscription.id,
            subscriptionType: subscrip_data.subscription.subscriptionType,
          },
          subscriptionExpire: true,
          subscriptionId: subscrip_data.subscription.id,
        });
      }

      res.status(httpStatus.NO_CONTENT).send();
    } else {
      if (!data.stripePaymentMethod) {
        return res.status(400).json({ message: 'Billing details not found' });
      }
      let subscription;
      if (data.subscription.subscriptionType === 'free') {
        subscription = await stripeService.createSubscription(data.stripeId, req.body.stripeId);
        // subscription = await stripeService.createSubscription(data.stripeId, 'prod_MnvehRi4EE8QyS');
        await updateUserListById(data._id, {
          subscription: {
            id: subscription.id,
            subscriptionType: data.subscription.subscriptionType,
          },
          subscriptionId: subscription.id,
        });

        console.log('subscription1', subscription);
      } else {
        subscription = await stripeService.updateSubscription(data.subscription.id, req.body.subscriptionType);
        await updateUserListById(data._id, {
          subscription: {
            id: subscription.id,
            subscriptionType: req.body.subscriptionType,
          },
          subscriptionId: subscription.id,
        });
        console.log('subscription2', subscription);
      }
      console.log('subscription1234', subscription);
      if (subscription) return res.send({ subscription });
      res.status(404).send({ status: null });
    }
  });
});

const completeSubscription = catchAsync(async (req, res) => {
  const uniqId = req.body.uniqId;
  UserList.findOne({ uniqId }, async (err, data) => {
    if (err && !data) {
      return res.status(400).json({ message: 'creat list first' });
    }
    data.status = true;
    const product = await stripeService.getProductFromProductId(req.body.productId);
    const userList = await updateUserListById(data._id, {
      subscription: {
        id: req.body.subscriptionId,
        subscriptionType: product.metadata.type,
      },
      subscriptionId: req.body.subscriptionId,
      subscriptionUpdatedAt: Date.now(),
      pending: false,
    });
    if (!data.paymentIsSepa) {
      try {
        //(data, immoscot, ebay, immowelt, wordpress)
        switch (product.metadata.type) {
          case 'basic':
            await publishTo4Platforms(data, true, true, false, false);
            break;
          case 'medium':
            await publishTo4Platforms(data, true, true, true, false);
            break;
          case 'premium':
            await publishTo4Platforms(data, true, true, true, false);
            //and we need to send email with {data} to manually publish to premuim portal
            let formData = {
              title: data.listingTitle,
              uniqId: data.uniqId,
              email: data.formEmail,
            };
            await new emailService({ name: 'Dominik', email: 'buchung@123provisionsfrei.de' }).EmailMePremium(formData);
            break;
        }
        //send email to the user * the listen is activated
        let user = await userService.getUserByEmail(data.email);
        if (!user.emailError) {
          await new emailService({ name: data.contactName, email: data.formEmail, userId: user._id }).ListingActivated(
            data.uniqId
          );
        }
      } catch (er) {
        console.log(er, 'complete subs');
      }
    }
    return res.send({ userList });
  });
});

//pause subs
const pauseSubscription = catchAsync(async (req, res) => {
  const uniqId = req.body.uniqId;
  // const paymentMethod = await stripeService.getPaymentMethod(req.body.paymentMethodId);

  UserList.findOne({ uniqId }, async (err, data) => {
    if (err && !data) {
      return res.status(400).json({ message: 'create list first' });
    } else if (data) {
      const updateBody = {
        subscriptionPause: true,
      };
      Object.assign(data, updateBody);
      data.status = false;
      //(data, immoscot, ebay, immowelt, wordpress)
      switch (data.subscription.subscriptionType) {
        case 'basic':
          await publishTo4Platforms(data, false, false, false, false);
          break;
        case 'medium':
          await publishTo4Platforms(data, false, false, false, false);
          break;
        case 'premium':
          await publishTo4Platforms(data, false, false, false, false);
          //and we need ti send email with {data}
          let formData = {
            title: data.listingTitle + ' - pause the list!',
            uniqId,
            email: data.formEmail,
          };
          await new emailService({ name: 'Dominik', email: 'buchung@123provisionsfrei.de' }).EmailMePremium(formData);
          break;
      }
      await data.save();
      res.send(data);
    }
  });
});
const unpauseSubscription = catchAsync(async (req, res) => {
  const uniqId = req.body.uniqId;
  UserList.findOne({ uniqId }, async (err, data) => {
    if (err && !data) {
      return res.status(400).json({ message: 'create list first' });
    } else if (data) {
      const updateBody = {
        subscriptionPause: false,
      };
      Object.assign(data, updateBody);
      data.status = true;
      //(data, immoscot, ebay, immowelt, wordpress)
      switch (data.subscription.subscriptionType) {
        case 'basic':
          await publishTo4Platforms(data, true, true, false, false);
          break;
        case 'medium':
          await publishTo4Platforms(data, true, true, true, false);
          break;
        case 'premium':
          await publishTo4Platforms(data, true, true, true, false);
          //and we need ti send email with {data}
          let formData = {
            title: data.listingTitle + ' - active again!',
            uniqId,
            email: data.formEmail,
          };
          await new emailService({ name: 'Dominik', email: 'buchung@123provisionsfrei.de' }).EmailMePremium(formData);
          break;
      }
      await data.save();
      res.send(data);
    }
  });
});

const deleteSubscription = catchAsync(async (req, res) => {
  await stripeService.deleteSubscription(req.body.subscriptionId);
  res.status(httpStatus.NO_CONTENT).send();
});
const cancelAutoRenew = catchAsync(async (req, res) => {
  const uniqId = req.body.uniqId;
  UserList.findOne({ uniqId }, async (err, data) => {
    if (err && !data) {
      return res.status(400).json({ message: 'create list first' });
    } else if (data) {
      const expiryDate = moment().add(1, 'months').format();
      data.activeUntil = expiryDate;
      data.subscriptionExpire = true;

      await data.save();
      console.log('data', data);
      try {
        await stripeService.cancelAutoRenew(data);
        res.status(httpStatus.NO_CONTENT).send();
      } catch (er) {
        return res.status(404).json({ message: 'subscription not found' });
      }
    }
  });
});
const createPaymentIntents = catchAsync(async (req, res) => {
  const { id } = req.body;
  const paymentIntent = await stripeService.paymentIntents(id);
  res.json({
    clientSecret: paymentIntent,
  });
});
const sendEmailToDom = catchAsync(async (req, res) => {
  const { uniqId, type } = req.body;
  let listData = await UserListValuation.findOne({ uniqId });
  let data = {
    uniqId: listData.uniqId,
    email: listData.email,
    formEmail: listData.formEmail,
  };
  await new emailService({ name: 'Dominik', email: 'buchung@123provisionsfrei.de' }).EmailMePremium(data, type);
  res.json({
    status: 'success',
  });
});

const webhook = catchAsync(async (req, res) => {
  const event = req.body;
  let invoice = event.data.object;
  try {
    let data = await updateUserListBySubscriptionId(
      { subscriptionId: invoice.subscription },
      {
        pending: false,
      }
    );

    switch (event.type) {
      case 'payment_intent.canceled':
        try {
          if (!data) break;
          //unpublish from the platforms @webhooks
          await stripeService.deleteSubscription(invoice.subscription);
          await updateUserListBySubscriptionId(
            { subscriptionId: invoice.subscription },
            {
              subscription: {
                subscriptionType: 'free',
              },
            }
          );
        } catch (er) {
          console.log(er, 'er payment canceled!');
        }
        break;
      case 'invoice.payment_succeeded':
        try {
          if (!data) break;
          await updateUserListBySubscriptionId(
            { subscriptionId: invoice.subscription },
            {
              subscriptionUpdatedAt: Date.now(),
            }
          );
        } catch (er) {
          console.log(er, 'er invoice.paid!');
        }
        break;
      default:
        console.log(`Unhandled event type ${event.type}`, data.subscription);
    }
  } catch (er) {
    console.log(er, 'try updateUserListBySubscriptionId webhook');
  }

  res.json({ received: true });
});

const paypalWebhook = catchAsync(async (req, res) => {
  const event = req.body;

  let invoice = event.resource;
  try {
    let data = await updateUserListBySubscriptionId(
      { subscriptionId: invoice.id },
      {
        pending: false,
      }
    );

    switch (event.event_type) {
      case 'BILLING.SUBSCRIPTION.CANCELLED':
        try {
          if (!data) break;
          await stripeService.deleteSubscription(invoice.id);
          const uniqId = data.uniqId;
          // change expire status to true and save active-until date so cron can automatically unpablish the records with expiry dates.
          UserList.findOne({ uniqId }, async (err, data) => {
            const expiryDate = moment().add(1, 'months').format();
            data.activeUntil = expiryDate;
            data.subscriptionExpire = true;
            await data.save();
            console.log('data', data);
          });
          //
        } catch (er) {
          console.log(er, 'er payment canceled!');
        }
        break;
      case 'BILLING.SUBSCRIPTION.SUCCEEDED':
        try {
          if (!data) break;
          await updateUserListBySubscriptionId(
            { subscriptionId: invoice.id },
            {
              subscriptionUpdatedAt: Date.now(),
            }
          );
        } catch (er) {
          console.log(er, 'er invoice.paid!');
        }
        break;
      default:
        console.log(`Unhandled event type ${event.type}`, data.subscription);
    }
  } catch (er) {
    console.log(er, 'try updateUserListBySubscriptionId webhook');
  }

  res.json({ received: true });
});

async function flowFactPlatform(id, data, cognitoToken) {
  try {
    await axios.post(
      `https://api.production.cloudios.flowfact-prod.cloud/portal-management-service/publish`,
      {
        entries: [
          {
            entityId: data.entityId,
            showAddress: data.hideAddress ? false : true,
            targetStatus: data.status ? 'ONLINE' : 'OFFLINE',
            publishChannels:
              id === process.env.IMMOSCOUT24_ID
                ? [
                    { type: 'SCOUT', channelIdentifier: '10000' },
                    { type: 'HOMEPAGE', channelIdentifier: '10001' },
                  ]
                : [],
          },
        ],
        portalId: id,
      },
      {
        headers: {
          cognitoToken,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (er) {
    console.log(er, 'flowFactPlatform');
  }
}

async function publishTo4Platforms(data, immoscot, ebay, immowelt, wordpress) {
  try {
    const cognitoToken = await generateCognitoToken();
    //process.env.IMMOSCOUT24_ID
    if (immoscot) {
      await flowFactPlatform(process.env.IMMOSCOUT24_ID, data, cognitoToken);
    }
    if (ebay) {
      await flowFactPlatform(process.env.EBAY_KLEINANZEIGEN_ID, data, cognitoToken);
    }
    if (immowelt) {
      await flowFactPlatform(process.env.IMMOWELT_IMMONET_ID, data, cognitoToken);
    }
    if (wordpress) {
      await flowFactPlatform(process.env.WORDPRESS, data, cognitoToken);
    }
  } catch (er) {
    console.log(er);
    return true;
  }
}

module.exports = {
  getStripeProducts,
  updatePaymentMethod,
  createSubscription,
  completeSubscription,
  deleteSubscription,
  sendEmailToDom,
  webhook,
  pauseSubscription,
  unpauseSubscription,
  createSubscriptionWithPaypal,
  cancelAutoRenew,
  getSepaClientSecret,
  publishTo4Platforms,
  createPaymentIntents,
  paypalWebhook,
};
