const { UserListService } = require("./user-list.service");
const sendResponse = require("../../../shared/sendResponse");
const catchAsync = require("../../../shared/catchasync");
const { generateCognitoToken } = require("../flowfact/flowfact.service");


const createList = catchAsync(async (req, res) => {
  const result = await UserListService.createList(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Userlist created successfully",
    data: result,
  });
});
const getMyList = catchAsync(async (req, res) => {
  const result = await UserListService.getMyList(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Userlist fetched successfully",
    data: result,
  });
});

const updateList = catchAsync(async (req, res) => {
  const result = await UserListService.updateList(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Userlist updated successfully",
    data: result,
  });
});
const removeImage = catchAsync(async (req, res) => {
  const result = await UserListService.removeImage(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Userlist image removed successfully",
    data: result,
  });
});

const deleteList = catchAsync(async (req, res) => {
  const result = await UserListService.deleteList(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Userlist deleted successfully",
    data: result,
  });
});


const cognitoToken = catchAsync(async (req, res) => {
  console.log("I was in user lis const")
  const cognitoToken = await generateCognitoToken();

  return res.status(200).json({ cognitoToken });
});



const UserListController = {
  createList,
  cognitoToken,
  getMyList,
  deleteList,
  updateList,
  removeImage
};

module.exports = { UserListController };
