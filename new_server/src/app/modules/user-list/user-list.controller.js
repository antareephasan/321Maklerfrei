// const { UserListService } = require("./user-list.service");
const sendResponse = require("../../../shared/sendResponse");
const catchAsync = require("../../../shared/catchasync");
const { generateCognitoToken } = require("../flowfact/flowfact.service");


const UserList = require("./user-list.model");
const ApiError = require("../../../errors/ApiError");
const httpStatus = require("http-status");
const { UserService } = require("../user/user.service");


const createList = catchAsync(async (req, res) => {
  const { email } = req.body;

  console.log("----------------------------------");
  console.log("email", email);
  //check the user
  const user = await UserService.getUserByEmail(email);
  if(!user) throw new ApiError(httpStatus.NOT_FOUND, 'user not found');

  if(req.query.uniqId){
    //lets create unique id for the new list
    const userList = await UserList.aggregate([{ "$match": { email } }]);
    const listNumber = ++(userList.length);
    const uniqId = `${user.customerId}-${listNumber}`;
    return res.json({
      uniqId,
      listNumber
    });
  }
  //stripeId
  // req.body.stripeId = user.stripeId;
  //sepaSecret
  // req.body.sepaClientSecret = user.sepaClientSecret;

  const lists = new UserList({
    ...req.body,
    // imgCollection,
    // planCollection,
  });
  lists.save((error, list) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (list) {
      res.status(201).json(list);
      // setTimeout(async () => {
      //   let listAferDay = await UserList.findById(list._id);
      //   if(listAferDay.subscription.subscriptionType == 'free'){
      //     //send the userId
      //     await new emailService({name: listAferDay.contactName, email: listAferDay.email, userId: user._id}).listInactive(listAferDay.uniqId);
      //   }
      // }, 86400000);
      return 
    }
  });
});


//create valuation for db
const createListValuation = catchAsync(async (req, res) => {
  const { email } = req.body;
  //check the user
  const user = await UserService.getUserByEmail(email);
  if(!user) throw new ApiError(httpStatus.NOT_FOUND, 'user not found');

  if(req.query.uniqId){
    //lets create unique id for the new list
    const userListValuation = await UserListValuation.aggregate([{ "$match": { email } }]);
    const listNumber = ++(userListValuation.length);
    const uniqId = `${user.customerId}-${listNumber}`;
    return res.json({
      uniqId,
      listNumber
    });
  }
  //stripeId
  req.body.stripeId = user.stripeId;
  //sepaSecret
  req.body.sepaClientSecret = user.sepaClientSecret;

  const lists = new UserListValuation({
    ...req.body
  });
  lists.save((error, list) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (list) {
      res.status(201).json(list);
    }
  });
});

const getList = catchAsync(async (req, res) => {
  const { email } = req.body;
  UserList.find({ email}, (err, data) => {
    if (err && !data) {
      return res.status(400).json({ mesaage: 'No list found ' });
    } else if (!err && data.length === 0) {
      return res.json({ message: 'success' });
    } else if (data.length > 0) {
      return res.send(data);
    } else {
      return res.status(404).json({ error: 'something went wrong' });
    }
  });
});

const updateUserList = catchAsync(async (req, res) => {
  const uniqId = req.params.uniqId;
  UserList.findOne({ uniqId }, async (err, data) => {
    if (err) {
      return res.status(400).json({ mesaage: 'No list found ' });
    }
    if (data) {
      if(!req.body.energy){
        data.energyPass = false;
        req.body.energyPass = false;
      }
      data = Object.assign(data, req.body);
      data.status = true;
      //(data, immoscot, ebay, immowelt, wordpress)
      switch (data.subscription.subscriptionType) {
        case 'basic' :
          await publishTo4Platforms(data, true, true, false, false);
          break;
        case 'medium' :
          await publishTo4Platforms(data, true, true, true, false);
          break;
        case 'premium' :
          await publishTo4Platforms(data, true, true, true, false);
          //and we need to send email with {data}
          let formData = {
            title: data.listingTitle,
            uniqId,
            email: data.formEmail
          }
          await new emailService({name: 'Dominik', email: 'buchung@321maklerfrei.de'}).EmailMePremium(formData);
          break;
      }
      await data.save();
      return res.status(200).json({ mesaage: 'successfully updated ' });
    }
  });
});


const deleteImage = catchAsync(async (req, res) => {
  let id = req.body.id;
  let uniqId = req.body.uniqId;
  const cognitoToken = await generateCognitoToken();
  if(req.query.title){
    try{
      UserList.findOne({ uniqId }, async (err, data) => {
        if (err) {
          return res.status(400).json({ mesaage: 'No list found ' });
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
          return res.status(200).json({ mesaage: 'success' });
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
    return res.status(200).json({ mesaage: 'success' });
  }catch(er){
    return res.status(404).json({ mesaage: 'failed' });
  }
});


const deleteUserList = catchAsync(async (req, res) => {
  let uniqId = req.params.uniqId;
  UserList.findOne({ uniqId }, async (err, data) => {
    if (err) {
      return res.status(400).json({ mesaage: 'No list found ' });
    }
    if (data) {
      const cognitoToken = await generateCognitoToken();
      await axios.delete(`https://api.production.cloudios.flowfact-prod.cloud/entity-service/schemas/${data.schema_name}/entities/${data.entityId}`, {
        headers: {
          "Content-Type": "application/json",
          cognitoToken
        }
      });
      data.deleted = true;
      await data.save();
      return res.status(200).json({ mesaage: 'success' });
    }
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
  getList,
  deleteUserList,
  updateUserList,
  deleteImage,
  createListValuation
};

module.exports = { UserListController };
