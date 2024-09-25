const ApiError = require("../../../errors/ApiError");  
const httpStatus = require("http-status"); 
const Auth = require("../auth/auth.model");
const Admin = require("./admin.model");
const User = require("../user/user.model");


// Update profile
const updateProfile = async (req) => {
  const { files } = req;
  const { userId, authId} = req.user;

  const data = req.body;
  if (!data) {
    throw new ApiError(400, "Data is missing in the request body!");
  }

  const checkUser = await Admin.findById(userId);
  if (!checkUser) {
    throw new ApiError(404, "User not found!");
  }

  const checkAuth = await Auth.findById(authId);
  if (!checkAuth) {
    throw new ApiError(403, "You are not authorized");
  }

  let profile_image;
  if (files?.profile_image) {
    profile_image = `/images/image/${files.profile_image[0].filename}`;
  }

  let cover_image;
  if (files?.cover_image) {
    cover_image = `/images/image/${files.cover_image[0].filename}`;
  }

  const updatedData = {
    ...data,
    ...(profile_image && { profile_image }),
    ...(cover_image && { cover_image }),
  };

   await Auth.findOneAndUpdate(
    { _id: authId },
    { name: updatedData.name },
    { new: true }
  );

  const updateUser = await Admin.findOneAndUpdate(
    { authId },
    updatedData,
    { new: true }
  ).populate('authId');

  return updateUser;
};

 
// Get single user
const myProfile = async (req) => {
  const {userId} = req.user;
  const result = await Admin.findById(userId).populate('authId');
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found!");
  }

  return result;
}; 

// approve Admin - done
const approveAdmins = async (email) => { 

  if(!email){  
      throw new ApiError(400, "Email is required!"); 
  }
  const existUser = await Auth.findOne({ email }); 
  if (!existUser) {
    throw new ApiError(400, "User not found");
  }

  const active = await Auth.findOneAndUpdate(
    { email },
    { isActive: true },
    {
      new: true,
      runValidators: true,
    }
  );

  return active;
};
   
// Delete my account
const deleteMyAccount = async (payload) => {
  const { email, password } = payload;

  const isUserExist = await Auth.isAuthExist(email);
  if (!isUserExist) {
    throw new ApiError(404, "User does not exist");
  }

  if (
    isUserExist.password &&
    !(await Auth.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(402, "Password is incorrect");
  }
         await Admin.deleteOne({authId: isUserExist._id}) 
  return await Auth.deleteOne({ email });
};

// Delete admin account
const deleteAdmin = async (email) => { 
  const isUserExist = await Auth.isAuthExist(email);
  if (!isUserExist) {
    throw new ApiError(404, "User does not exist");
  }

  if (
    isUserExist.password &&
    !(await Auth.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(402, "Password is incorrect");
  }
         await Admin.deleteOne({authId: isUserExist._id}) 
  return await Auth.deleteOne({ email });
};

// Delete admin account
const deleteUser = async (email) => { 
  const isUserExist = await Auth.isAuthExist(email);
  if (!isUserExist) {
    throw new ApiError(404, "User does not exist");
  }

  if (
    isUserExist.password &&
    !(await Auth.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(402, "Password is incorrect");
  }
         await User.deleteOne({authId: isUserExist._id}) 
  return await Auth.deleteOne({ email });
};
 
// Get all user
const getAllUsers = async () => {
  const result = await User.findOne({}).populate('authId');
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  } 
  return result;
}; 

// Get all admin
const getAllAdmin = async () => {
  const result = await Admin.find({}).populate('authId');
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  } 
  return result;
}; 

// Get all driver
// const getAllDriver = async (user) => {
//   const result = await Admin.findOne({authId: user.userId}).populate('authId');
//   if (!result) {
//     throw new ApiError(httpStatus.NOT_FOUND, "User not found");
//   } 
//   return result;
// }; 

const AdminService = {
  updateProfile,
  myProfile,
  deleteAdmin,
  deleteUser,
  approveAdmins,
  deleteMyAccount,
  getAllUsers,
  getAllAdmin, 
};

module.exports = { AdminService };
