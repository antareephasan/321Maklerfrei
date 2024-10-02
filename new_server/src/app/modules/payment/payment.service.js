const httpStatus = require("http-status");
const config = require("../../../config");
const ApiError = require("../../../errors/ApiError");
const User = require("../user/user.model");
// const Driver = require("../driver/driver.model");
const Payment = require("./payment.model");
const Packages = require("../packages/packages.model");
const UserList = require("../user-list/user-list.model");
const stripe = require("stripe")(config.stripe.stripe_secret_key);

const YOUR_DOMAIN = "http://localhost:3000";


const createCheckoutSession = async (req) => {
  try {
    const { packageId, listingId } = req.body
    const { userId } = req.user

    console.log("listingId(client_reference_id)", listingId);

    const user = await User.findById(userId)

    console.log("UserId: ", userId);
    console.log("User: ", user);
    const package = await Packages.findById(packageId)
    if (!package) {
      throw new ApiError(httpStatus.NOT_FOUND, 'invalid package ID.');
    }

    const packagePrice = Number(package.price); // Convert package.price to a number
    const unitAmount = packagePrice * 100; // Convert to cents

    let session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      customer_email: `${user.email}`,
      client_reference_id: listingId,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: unitAmount,
            product_data: {
              name: package.packageName,
              description: package.packageDescription
            }
          },
          quantity: 1
        }
      ]
    })

    return session;

  } catch (error) {
    throw new ApiError(400, error);
  }
};


const checkAndUpdateStatusByWebhook = async (req) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    const webhook_sign_in_secret ='whsec_9d3f294e767ee851892730c440f5bc9936aee58afb59ef536aaf6de952698b7e';
    event = stripe.webhooks.constructEvent(req.body, sig, webhook_sign_in_secret);
    // event = stripe.webhooks.constructEvent(req.body, sig, config.stripe.endpoint_secret);
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    throw new ApiError(400, `Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const listingId = session.client_reference_id;
    const transactionId = session.payment_intent;
    
    console.log("session: ", session);
    console.log("listingId: ", listingId);
    console.log("transactionId: ", transactionId);

    try {
      const updateOrder = await UserList.findByIdAndUpdate(
        listingId,
        {
          $set: {
            transitionId: transactionId,
            status: 'Paid',
          },
        },
        { new: true }
      );

      if (!updateOrder) {
        throw new ApiError(404, 'UserList entry not found');
      }

      console.log(`Order updated successfully: ${updateOrder}`);
    } catch (err) {
      console.error(`Error updating UserList: ${err.message}`);
      throw new ApiError(500, `Database Error: ${err.message}`);
    }
  } else {
    console.log(`Unhandled event type: ${event.type}`);
  }
}

// router.post("/stripe/webhook", bodyParser.raw({ type: 'application/json' }), async (req, res) => {
//   const sig = req.headers['stripe-signature'];
//   let event;
//   const webhook_signin_secret = 'whsec_9d3f294e767ee851892730c440f5bc9936aee58afb59ef536aaf6de952698b7e';
//   try {
//       event = stripe.webhooks.constructEvent(req.body, sig, webhook_signin_secret);
//   } catch (error) {
//       console.error(`Webhook signature verification failed: ${error.message}`);
//       res.status(400).json({ success: false });
//       return
//   }

//   console.log(event.type);
//   console.log(event.data.object);
//   console.log(event.data.object.id);

//   res.json({
//       success: true
//   })

// });


const PaymentService = {
  createCheckoutSession,
  checkAndUpdateStatusByWebhook,
  // savePaymentUpdateSpending,
  // updateTotalEarning,
};

module.exports = PaymentService;
