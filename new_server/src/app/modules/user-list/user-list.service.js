
const ApiError = require("../../../errors/ApiError");
const User = require("../user/user.model");
const httpStatus = require("http-status");
const Auth = require("../auth/auth.model");
const UserList = require("./user-list.model");


const createList = async (req) => {
    const { userId, authId } = req.user;
    const data = req.body;
    if (!data) {
        throw new Error("Data is missing in the request body!");
    }

    // console.log("Server data: ---------", data);

    const checkUser = await User.findById(userId);

    if (!checkUser) {
        throw new ApiError(404, "User not found!");
    }

    const checkAuth = await Auth.findById(authId);
    if (!checkAuth) {
        throw new ApiError(404, "You are not authorized");
    }

    // if(req.query.uniqId){
    //     //lets create unique id for the new list
    //     const userList = await UserList.find({
    //         where: {
    //             userId: userId
    //         }
    //     })
    //     const listNumber = ++(userList.length);
    //     const uniqId = `${authId}-${listNumber}`;
    //     return {
    //       uniqId,
    //       listNumber
    //     };
    //   }


    const userList = await UserList.create({
        ...data,
        userId
    });

    return userList;
};

const getMyList = async (req) => {
    const { userId, authId } = req.user;

    const checkUser = await User.findById(userId);

    if (!checkUser) {
        throw new ApiError(404, "User not found!");
    }

    const checkAuth = await Auth.findById(authId);
    if (!checkAuth) {
        throw new ApiError(404, "You are not authorized");
    }


    //lets create unique id for the new list
    const myUserList = await UserList.find({ userId })

    return myUserList;
};
const updateList = async (req) => {
    const { userId, authId } = req.user;
    const {listId} = req.params;

    const data = req.body;

    const checkUser = await User.findById(userId);

    if (!checkUser) {
        throw new ApiError(404, "User not found!");
    }

    const checkAuth = await Auth.findById(authId);
    if (!checkAuth) {
        throw new ApiError(404, "You are not authorized");
    }

    const listToUpdate = await UserList.findById(listId);


    if(!listToUpdate) {
        throw new ApiError(404, "List not found");
    }

    // console.log("listToUpdate", listToUpdate);
    // console.log("userId", userId);

    if(listToUpdate.userId.toString() !== userId) {
        throw new ApiError(403, "Unauthorized");
    }


    console.log("--------------------------");
    console.log(data);
    //lets create unique id for the new list
    const updatedList = await UserList.findByIdAndUpdate(listId,data, {
        new: true
    });

    return updatedList;
};

const removeImage = async (req) => { 
    const { userId, authId } = req.user;
    const { listId } = req.params;
    const { imageToRemove } = req.body; // Assuming req.body contains a single image to remove

    // Validate user and authorization
    const checkUser = await User.findById(userId);
    if (!checkUser) {
        throw new ApiError(404, "User not found!");
    }

    const checkAuth = await Auth.findById(authId);
    if (!checkAuth) {
        throw new ApiError(404, "You are not authorized");
    }

    const listToUpdate = await UserList.findById(listId);
    if (!listToUpdate) {
        throw new ApiError(404, "List not found");
    }

    // Ensure the user is authorized to modify this list
    if (listToUpdate.userId.toString() !== userId) {
        throw new ApiError(403, "Unauthorized");
    }

    // Filter out the single image to remove from both collections
    const updatedImgCollection = listToUpdate.imgCollection.filter(image => image !== imageToRemove);
    const updatedPlanCollection = listToUpdate.planCollection.filter(image => image !== imageToRemove);

    // Update the UserList with the new image collections
    const updatedList = await UserList.findByIdAndUpdate(
        listId,
        {
            imgCollection: updatedImgCollection,
            planCollection: updatedPlanCollection,
        },
        { new: true } // Return the updated document
    );

    return updatedList;
};



const deleteList = async (req) => {
    const { userId, authId } = req.user;
    const { listId } = req.params;

    const checkUser = await User.findById(userId);

    if (!checkUser) {
        throw new ApiError(404, "User not found!");
    }

    const checkAuth = await Auth.findById(authId);
    if (!checkAuth) {
        throw new ApiError(404, "You are not authorized");
    }


    const listToDelete = await UserList.findById(listId);


    if(!listToDelete) {
        throw new ApiError(404, "List not found");
    }

    if(listToDelete.userId.toString() !== userId) {
        throw new ApiError(403, "Unauthorized");
    }

    //lets create unique id for the new list
    const deletedList = await UserList.findByIdAndDelete(listId);

    return deletedList;
};


const UserListService = {
    createList,
    getMyList,
    deleteList,
    updateList,
    removeImage
};

module.exports = { UserListService };


// const createLists = catchAsync(async (req, res) => {

  
//     if(req.query.uniqId){
//       //lets create unique id for the new list
//       const userList = await UserList.aggregate([{ "$match": { email } }]);
//       const listNumber = ++(userList.length);
//       const uniqId = `${user.customerId}-${listNumber}`;
//       return res.json({
//         uniqId,
//         listNumber
//       });
//     }
//     //stripeId
//     req.body.stripeId = user.stripeId;
//     //sepaSecret
//     req.body.sepaClientSecret = user.sepaClientSecret;
  
//     const lists = new UserList({
//       ...req.body,
//       // imgCollection,
//       // planCollection,
//     });
//     lists.save((error, list) => {
//       if (error) {
//         return res.status(400).json({ error });
//       }
//       if (list) {
//         res.status(201).json(list);
//         // setTimeout(async () => {
//         //   let listAferDay = await UserList.findById(list._id);
//         //   if(listAferDay.subscription.subscriptionType == 'free'){
//         //     //send the userId
//         //     await new emailService({name: listAferDay.contactName, email: listAferDay.email, userId: user._id}).listInactive(listAferDay.uniqId);
//         //   }
//         // }, 86400000);
//         return 
//       }
//     });
//   });
  