const { UserService } = require("./user.service");
const sendResponse = require("../../../shared/sendResponse");
const catchAsync = require("../../../shared/catchasync"); 


const updateProfile = catchAsync(async (req, res) => {
  const result = await UserService.updateProfile(req);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Profile updated successfully",
    data: result,
  });
});
  
const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserService.getAllUsers(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users retrieved successfully",
    data: result.data,
    meta: result.meta,
  });
});

const getProfile = catchAsync(async (req, res) => {

  const result = await UserService.getProfile(req.user);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User retrieved successfully",
    data: result,
  });
});
  

const deleteMyAccount = catchAsync(async (req, res) => {
  await UserService.deleteMyAccount(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Account deleted!",
  });
});
 

const UserController = { 
  deleteMyAccount, 
  getAllUsers,
  getProfile, 
  updateProfile
};

module.exports = { UserController };