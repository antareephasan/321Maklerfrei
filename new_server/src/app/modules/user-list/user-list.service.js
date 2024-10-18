
const ApiError = require("../../../errors/ApiError");
const User = require("../user/user.model");
const httpStatus = require("http-status");
const Auth = require("../auth/auth.model");
const UserList = require("./user-list.model");
const { UserService } = require("../user/user.service");
const { generateCognitoToken } = require("../flowfact/flowfact.service");
const axios = require('axios');


const createList = async (req) => {
    const { email } = req.body;

    console.log("createList");
    console.log("===========");
    console.log("req.body", req.body);
    console.log("email", email);
    //check the user
    const user = await UserService.getUserByEmail(email);
    if(!user) throw new ApiError(httpStatus.NOT_FOUND, 'user not found');

    if(req.query.uniqId) {
        console.log("Was in uniqId true")
        //lets create unique id for the new list
        const userList = await UserList.aggregate([{ "$match": { email } }]);
        const listNumber = ++(userList.length);
        const uniqId = `${user.customerId}-${listNumber}`;

        console.log("Returning uniqID and listNumber");
        console.log("uniqID ", uniqId);
        console.log("listNumber ", listNumber);
        return {
          uniqId,
          listNumber
        }
    }

    console.log("After uniqId")

    const lists = new UserList({
        ...req.body,
      });
    //   lists.save((error, list) => {
    //     if (error) {
    //       return res.status(400).json({ error });
    //     }
    //     if (list) {
          
    //       return list;
    //     }
    //   });

      try {
        const savedList = await lists.save(); // Use async/await instead of callback
        console.log('List saved successfully:', savedList);
        return savedList;
    } catch (error) {
        console.error('Error saving list:', error);
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error saving list');
    }

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
    const myUserList = await UserList.find({ email:checkUser.email });

    return myUserList;
};
const updateList = async (req) => {
    const { userId, authId } = req.user;
    const { uniqId } = req.params;

    const data = req.body;

    const checkUser = await User.findById(userId);

    if (!checkUser) {
        throw new ApiError(404, "User not found!");
    }

    const checkAuth = await Auth.findById(authId);
    if (!checkAuth) {
        throw new ApiError(404, "You are not authorized");
    }

    const listToUpdate = await UserList.find({uniqId});


    if(!listToUpdate) {
        throw new ApiError(404, "List not found");
    }

    console.log("listToUpdate.email", listToUpdate.email);
    console.log("checkUser.email", checkUser.email);

    if(listToUpdate.email !== checkUser.email) {
        throw new ApiError(403, "Unauthorized");
    }


    console.log("--------------------------");
    console.log(data);
    //lets create unique id for the new list
    const updatedList = await UserList.findByIdAndUpdate(listToUpdate._id, data, {
        new: true
    });

    return updatedList;
};

// const removeImage = async (req) => { 
//     const { userId, authId } = req.user;
//     const { listId } = req.params;
//     const { imageToRemove } = req.body; // Assuming req.body contains a single image to remove

//     // Validate user and authorization
//     const checkUser = await User.findById(userId);
//     if (!checkUser) {
//         throw new ApiError(404, "User not found!");
//     }

//     const checkAuth = await Auth.findById(authId);
//     if (!checkAuth) {
//         throw new ApiError(404, "You are not authorized");
//     }

//     const listToUpdate = await UserList.findById(listId);
//     if (!listToUpdate) {
//         throw new ApiError(404, "List not found");
//     }

//     // Ensure the user is authorized to modify this list
//     if (listToUpdate.userId.toString() !== userId) {
//         throw new ApiError(403, "Unauthorized");
//     }

//     // Filter out the single image to remove from both collections
//     const updatedImgCollection = listToUpdate.imgCollection.filter(image => image !== imageToRemove);
//     const updatedPlanCollection = listToUpdate.planCollection.filter(image => image !== imageToRemove);

//     // Update the UserList with the new image collections
//     const updatedList = await UserList.findByIdAndUpdate(
//         listId,
//         {
//             imgCollection: updatedImgCollection,
//             planCollection: updatedPlanCollection,
//         },
//         { new: true } // Return the updated document
//     );

//     return updatedList;
// };

// const deleteList = async (req) => {
//     const { userId, authId } = req.user;
//     const { uniqId } = req.params;

//     const checkUser = await User.findById(userId);

//     if (!checkUser) {
//         throw new ApiError(404, "User not found!");
//     }

//     const checkAuth = await Auth.findById(authId);
//     if (!checkAuth) {
//         throw new ApiError(404, "You are not authorized");
//     }


//     const listToDelete = await UserList.find({uniqId});


//     if(!listToDelete) {
//         throw new ApiError(404, "List not found");
//     }

//     if(listToDelete.email !== checkUser.email) {
//         throw new ApiError(403, "Unauthorized");
//     }

//     //lets create unique id for the new list
//     const deletedList = await UserList.findByIdAndDelete(listToDelete._id);

//     return deletedList;
// };


const deleteImage = async (req) => {
    let id = req.body.id;
    let uniqId = req.body.uniqId;
    const cognitoToken = await generateCognitoToken();

    if(req.query.title){
      try{
        UserList.findOne({ uniqId }, async (err, data) => {
          if (err) {
            throw new ApiError(404, "No list found");
          }
          if (data) {
            await axios.patch(`https://api.production.cloudios.flowfact-prod.cloud/multimedia-service/items/${id}`, [
              {
            
                "op": "replace",
            
                "path": "/title",
            
                "value": req.body.title
            
              }
            ], {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                cognitoToken
              }
            });
            return { mesaage: 'success' };
          }
        });
      }catch(er){ 
        console.log(er.message, 150);
      }
      return
    }

    try{
      await axios.delete(`https://api.production.cloudios.flowfact-prod.cloud/multimedia-service/items/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          cognitoToken
        }
      });
      return { mesaage: 'success' };
    }catch(er){
        throw new ApiError(404, "Failed");
    }
  };
  
  const deleteUserList = async (req) => {
    let uniqId = req.params.uniqId;
    
    try {
        const data = await UserList.findOne({ uniqId });
        
        if (!data) {
            throw new ApiError(400, "No list found");
        }

        const cognitoToken = await generateCognitoToken();

        // Perform the delete operation
        const response = await axios.delete(`https://api.production.cloudios.flowfact-prod.cloud/entity-service/schemas/${data.schema_name}/entities/${data.entityId}`, {
            headers: {
                "Content-Type": "application/json",
                cognitoToken
            }
        });

        // Check if the delete operation with FlowFact was successful
        if (response.status === 200) {
        // Delete the document from the database
            await UserList.deleteOne({ uniqId });
            return { message: 'success' };
        } else {
            console.log("Failed to delete from external API");
            throw new ApiError(400, "Failed to delete from external service");
        }
        
    } catch (err) {
        // Handle errors, possibly log or rethrow them
        throw new ApiError(400, err.message || "An error occurred");
    }
};



const UserListService = {
    createList,
    getMyList,
    updateList,
    deleteImage,
    deleteUserList
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
  