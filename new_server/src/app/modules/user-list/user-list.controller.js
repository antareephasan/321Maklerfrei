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


const cognitoToken = catchAsync(async (req, res) => {
  console.log("I was in user lis const")
  const cognitoToken = await generateCognitoToken();
  
  return res.status(200).json({ cognitoToken });
});

  

const UserListController = { 
  createList, 
  cognitoToken
};

module.exports = { UserListController };
