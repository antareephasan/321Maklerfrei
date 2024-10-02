const catchAsync = require("../../../shared/catchasync");
const sendResponse = require("../../../shared/sendResponse");
const PaymentService = require("../payment/payment.service");

const createCheckoutSession = catchAsync(async (req, res) => {
  const result = await PaymentService.createCheckoutSession(req);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Get url for check-out success",
    data: result,
  });
});
const checkAndUpdateStatusByWebhook = catchAsync(async (req, res) => {
  const result = await PaymentService.checkAndUpdateStatusByWebhook(req);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Payment verified successfully",
    data: result,
  });
});

// const savePaymentUpdateSpending = catchAsync(async (req, res) => {
//   const result = await PaymentService.savePaymentUpdateSpending(req.body);

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "You payment is saved. Total spend amount updated successfully",
//     data: result,
//   });
// });

// const updateTotalEarning = catchAsync(async (req, res) => {
//   const result = await PaymentService.updateTotalEarning(req.body);

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Total earning amount updated successfully",
//     data: result,
//   });
// });

const PaymentController = {
  createCheckoutSession,
  checkAndUpdateStatusByWebhook,
  // savePaymentUpdateSpending,
  // updateTotalEarning,
};

module.exports = PaymentController;
