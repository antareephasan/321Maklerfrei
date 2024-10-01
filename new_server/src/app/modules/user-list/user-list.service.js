
const ApiError = require("../../../errors/ApiError");
const User = require("../user/user.model");
const httpStatus = require("http-status");
const Auth = require("../auth/auth.model");
const UserList = require("./user-list.model");


// Update profile
const createList = async (req) => {
    const { userId, authId } = req.user;
    const data = req.body;
    if (!data) {
        throw new Error("Data is missing in the request body!");
    }

    console.log("Server data: ---------", data);

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


const UserListService = {
    createList
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
  