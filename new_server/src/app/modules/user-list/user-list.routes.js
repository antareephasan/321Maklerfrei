const express = require("express");
const auth = require("../../middlewares/auth");
const { ENUM_USER_ROLE } = require("../../../utils/enums");
const { uploadFile } = require("../../middlewares/fileUploader"); 
const { UserListController } = require("./user-list.controller");

const router = express.Router();

// User routes
router.post(
  "/create",
  auth(ENUM_USER_ROLE.USER),
  UserListController.createList
);
 

router.get('/t-d-t', UserListController.cognitoToken);


// router.delete(
//   "/delete-account",
//   auth(ENUM_USER_ROLE.USER),
//   UserController.deleteMyAccount
// ); 
 
// // IDS Work routes
// router.get(
//   "/profile",
//   auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
//   UserController.getProfile
// ); 
 

 

module.exports = router;
