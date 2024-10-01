const httpStatus = require("http-status");
const config = require("../../../config");
const ApiError = require("../../../errors/ApiError");
const User = require("../auth/auth.model");
// const Driver = require("../driver/driver.model");
const Payment = require("./payment.model"); 
const Packages = require("../packages/packages.model");
const UserList = require("../user-list/user-list.model");
const stripe = require("stripe")(config.stripe.stripe_secret_key);

const YOUR_DOMAIN = "http://localhost:3000";


const createCheckoutSession = async (req, res) => {
  try {
      const { price, packageId, useListId } = req.body
      const {userId} = req.user

      const user = await User.findById(userId)
      const package = await Packages.findById(packageId)
      if(!package){
        throw new ApiError(httpStatus.NOT_FOUND, 'invalid package ID.');
      }

      let session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              mode: 'payment',
              success_url: `${YOUR_DOMAIN}?success=true`,
              cancel_url: `${YOUR_DOMAIN}?canceled=true`,
              customer_email: `${user.email}`, 
              client_reference_id: useListId,
              line_items: [
                  {
                      price_data: {
                          currency: 'usd',
                          unit_amount: price * 100,
                          product_data: {
                              name: package.packageName,
                              description: package.packageDescription
                          }
                      },
                      quantity: 1
                  }
              ]
          })

      return session

  } catch (error) {
      return res.json({ status: "error", message: error });
  }
};





const checkAndUpdateStatusByPaypal = async (request) => {
  const sig = request.headers['stripe-signature'];  
  const payload = request.body;  

  let event;
  try { 
    event = stripe.webhooks.constructEvent(payload, sig, config.stripe.endpoint_secret);
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    throw new ApiError(400, `Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object; 
    const useListId = session.client_reference_id;
    const transactionId = session.payment_intent;  
 
    try {
      const updateOrder = await UserList.findByIdAndUpdate(
        useListId, 
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


const PaymentService = {
  createCheckoutSession,
  checkAndUpdateStatusByPaypal,
  // savePaymentUpdateSpending,
  // updateTotalEarning,
};

module.exports = PaymentService;
