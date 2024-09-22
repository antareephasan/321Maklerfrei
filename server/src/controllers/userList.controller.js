const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { stripeService, userService, emailService } = require('../services');
const { publishTo4Platforms } = require('../controllers/stripe.controller');
const axios = require('axios');
const { UserList, User, UserListValuation } = require('../models');
const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
const { generateCognitoToken } = require('../services/flowfact.service');
const moment = require('moment');
const s3 = new AWS.S3();
const createList = catchAsync(async (req, res) => {
  const { email } = req.body;
  //check the user
  const user = await userService.getUserByEmail(email);
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
  req.body.stripeId = user.stripeId;
  //sepaSecret
  req.body.sepaClientSecret = user.sepaClientSecret;

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
  const user = await userService.getUserByEmail(email);
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
// (()=>{
//   setTimeout(async () => {
//     const users = await User.find();
//     const lists = await UserList.find();
//     for (let index = 0; index < users.length; index++) {
//       const user = users[index];
//       let test = lists.some((ele)=> ele.email === user.email)
//       if(!test){
//         await new emailService({name: user.contactName, email: user.email}).createFirstList();
//         console.log(user.email);
//       }
//     }
//     for (let index = 0; index < lists.length; index++) {
//       const element = lists[index];
//       if(element.subscription.subscriptionType === 'free'){
//         await new emailService({name: element.contactName, email: element.email}).listInactive(element.uniqId);
//         console.log(element.email);
//       }
//     }
//   }, 5000);
// })()
// (()=>{
//   setTimeout(async () => {
//     const lists = await UserList.find();
    
//     for (let index = 0; index < lists.length; index++) {
//       const element = lists[index];
//       if(element.listingPrice){
//         await UserList.findByIdAndUpdate(element._id, {
//           listingPrice : element.listingPrice
//         })
//       }
//       if(element.rentPrice){
//         await UserList.findByIdAndUpdate(element._id, {
//           rentPrice: element.rentPrice
//         })
//       }
//       console.log(element._id, ' updated!');
//     }
//   }, 0);
// })()


const getAllUsers = async (req, res) => {  
  try { 
   const user = await  User.find({})  

   console.log('user', user)

    return res.status(201).send({user, message: "success"}) 
   } catch (error) {
    return res.status(401).json({message: error.massages})
  }
}

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
const getRecentImmobilien = catchAsync(async (req, res) => {
  // subscriptionExpire: false,
  let recentImmobilien = await UserList.find(
    {subscriptionExpired: false, subscriptionPause: false, subscription: { $ne: {subscriptionType: 'free' } }}).select(['uniqId', 'entityId', 'listingType', 'listingPrice', 'rentPrice', 'listingTitle', 'zip', 'city']).sort({ createdAt: -1 }).limit(9);
  const cognitoToken = await generateCognitoToken();
  const dataTosend = []
  for (let index = 0; index < recentImmobilien.length; index++) {
    const list = recentImmobilien[index];
    let listMultimedia = await axios.get(`https://api.production.cloudios.flowfact-prod.cloud/multimedia-service/items/entities/${list.entityId}`,{
       headers: {
         cognitoToken
       }
     });
     dataTosend.push({
       uniqId: list.uniqId,
       city: list.city,
       zip: list.zip,
       images: listMultimedia.data ? listMultimedia.data.map(img => img.fileReference ) : [],
       price: list.listingType === 'For Sale' ? list.listingPrice : list.rentPrice,
       title: list.listingTitle
     });
  }
  res.json({
    message: 'success',
    recentImmobilien: dataTosend
  });
});
const Immobilien = catchAsync(async (req, res) => {
  let immobilien = await UserList.findOne({uniqId: req.params.id});
  if(!immobilien) {
    return res.json({
      message: 'failed',
      data : []
    });
  }
  const cognitoToken = await generateCognitoToken();
  
  let listMultimedia = await axios.get(`https://api.production.cloudios.flowfact-prod.cloud/multimedia-service/items/entities/${immobilien.entityId}`,{
     headers: {
       cognitoToken
     }
  });
  let data = {...immobilien._doc,
    images: listMultimedia.data ? listMultimedia.data.map(img => img.fileReference ) : [],
    price: immobilien.listingType === 'For Sale' ? immobilien.listingPrice : immobilien.rentPrice
  }
  res.json({
    message: 'success',
    data
  });
});
const messageTemp = (data)=> {
  return `<!doctype html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Simple Transactional Email</title>
      <style>
        /* -------------------------------------
            GLOBAL RESETS
        ------------------------------------- */
        
        /*All the styling goes here*/
        
        img {
          border: none;
          -ms-interpolation-mode: bicubic;
          max-width: 100%; 
        }
  
        body {
          background-color: #f6f6f6;
          font-family: sans-serif;
          -webkit-font-smoothing: antialiased;
          font-size: 14px;
          line-height: 1.4;
          margin: 0;
          padding: 0;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%; 
        }
  
        table {
          border-collapse: separate;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          width: 100%; }
          table td {
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top; 
        }
  
        /* -------------------------------------
            BODY & CONTAINER
        ------------------------------------- */
  
        .body {
          background-color: #f6f6f6;
          width: 100%; 
        }
  
        /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
        .container {
          display: block;
          margin: 0 auto !important;
          /* makes it centered */
          max-width: 580px;
          padding: 10px;
          width: 580px; 
        }
  
        /* This should also be a block element, so that it will fill 100% of the .container */
        .content {
          box-sizing: border-box;
          display: block;
          margin: 0 auto;
          max-width: 580px;
          padding: 10px; 
        }
  
        /* -------------------------------------
            HEADER, FOOTER, MAIN
        ------------------------------------- */
        .main {
          background: #ffffff;
          border-radius: 3px;
          width: 100%; 
        }
  
        .wrapper {
          box-sizing: border-box;
          padding: 20px; 
        }
  
        .content-block {
          padding-bottom: 10px;
          padding-top: 10px;
        }
  
        .footer {
          clear: both;
          margin-top: 10px;
          text-align: center;
          width: 100%; 
        }
          .footer td,
          .footer p,
          .footer span,
          .footer a {
            color: #999999;
            font-size: 12px;
            text-align: center; 
        }
  
        /* -------------------------------------
            TYPOGRAPHY
        ------------------------------------- */
        h1,
        h2,
        h3,
        h4 {
          color: #000000;
          font-family: sans-serif;
          font-weight: 400;
          line-height: 1.4;
          margin: 0;
          margin-bottom: 30px; 
        }
  
        h1 {
          font-size: 35px;
          font-weight: 300;
          text-align: center;
          text-transform: capitalize; 
        }
  
        p,
        ul,
        ol {
          font-family: sans-serif;
          font-size: 14px;
          font-weight: normal;
          margin: 0;
          margin-bottom: 15px; 
        }
          p li,
          ul li,
          ol li {
            list-style-position: inside;
            margin-left: 5px; 
        }
  
        a {
          color: #3498db;
          text-decoration: underline; 
        }
  
        /* -------------------------------------
            BUTTONS
        ------------------------------------- */
        .btn {
          box-sizing: border-box;
          width: 100%; }
          .btn > tbody > tr > td {
            padding-bottom: 15px; }
          .btn table {
            width: auto; 
        }
          .btn table td {
            background-color: #ffffff;
            border-radius: 5px;
            text-align: center; 
        }
          .btn a {
            background-color: #ffffff;
            border: solid 1px #3498db;
            border-radius: 5px;
            box-sizing: border-box;
            color: #3498db;
            cursor: pointer;
            display: inline-block;
            font-size: 14px;
            font-weight: bold;
            margin: 0;
            padding: 12px 25px;
            text-decoration: none;
            text-transform: capitalize; 
        }
  
        .btn-primary table td {
          background-color: #3498db; 
        }
  
        .btn-primary a {
          background-color: #3498db;
          border-color: #3498db;
          color: #ffffff; 
        }
  
        /* -------------------------------------
            OTHER STYLES THAT MIGHT BE USEFUL
        ------------------------------------- */
        .last {
          margin-bottom: 0; 
        }
  
        .first {
          margin-top: 0; 
        }
  
        .align-center {
          text-align: center; 
        }
  
        .align-right {
          text-align: right; 
        }
  
        .align-left {
          text-align: left; 
        }
  
        .clear {
          clear: both; 
        }
  
        .mt0 {
          margin-top: 0; 
        }
  
        .mb0 {
          margin-bottom: 0; 
        }
  
        .preheader {
          color: transparent;
          display: none;
          height: 0;
          max-height: 0;
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          mso-hide: all;
          visibility: hidden;
          width: 0; 
        }
  
        .powered-by a {
          text-decoration: none; 
        }
  
        hr {
          border: 0;
          border-bottom: 1px solid #f6f6f6;
          margin: 20px 0; 
        }
  
        /* -------------------------------------
            RESPONSIVE AND MOBILE FRIENDLY STYLES
        ------------------------------------- */
        @media only screen and (max-width: 620px) {
          table.body h1 {
            font-size: 28px !important;
            margin-bottom: 10px !important; 
          }
          table.body p,
          table.body ul,
          table.body ol,
          table.body td,
          table.body span,
          table.body a {
            font-size: 16px !important; 
          }
          table.body .wrapper,
          table.body .article {
            padding: 10px !important; 
          }
          table.body .content {
            padding: 0 !important; 
          }
          table.body .container {
            padding: 0 !important;
            width: 100% !important; 
          }
          table.body .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important; 
          }
          table.body .btn table {
            width: 100% !important; 
          }
          table.body .btn a {
            width: 100% !important; 
          }
          table.body .img-responsive {
            height: auto !important;
            max-width: 100% !important;
            width: auto !important; 
          }
        }
  
        /* -------------------------------------
            PRESERVE THESE STYLES IN THE HEAD
        ------------------------------------- */
        @media all {
          .ExternalClass {
            width: 100%; 
          }
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
            line-height: 100%; 
          }
          .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important; 
          }
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
          }
          .btn-primary table td:hover {
            background-color: #34495e !important; 
          }
          .btn-primary a:hover {
            background-color: #34495e !important;
            border-color: #34495e !important; 
          } 
        }
  
      </style>
    </head>
    <body>
      <span class="preheader">Du hast eine neue Anfrage erhalten.</span>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
          <td>&nbsp;</td>
          <td class="container">
            <div class="content">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <table role="presentation" class="main">
  
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p>Hi, ${data.name} ist interessiert an deinem Angebot: ${data.id}</p>
                          <strong>E-Mail Adresse: ${data.email}</strong>
                          <p>${data.message}</p>
                          <p>Wir verbleiben mit freundlichen Grüßen!</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
  
              <!-- END MAIN CONTENT AREA -->
              </table>
              <!-- END CENTERED WHITE CONTAINER -->
  
              <!-- START FOOTER -->
              <div class="footer">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td class="content-block powered-by">
                      Powered by <a href="https://123provisionsfrei.de/">123provisionsfrei</a>.
                    </td>
                  </tr>
                </table>
              </div>
              <!-- END FOOTER -->
  
            </div>
          </td>
          <td>&nbsp;</td>
        </tr>
      </table>
    </body>
  </html>`
}
const contactImmobilien = catchAsync(async (req, res) => {
  let immobilien = await UserList.findOne({uniqId: req.body.id});
  if(!immobilien) {
    return res.json({
      message: 'failed',
      data : []
    });
  }
  let template = messageTemp({name: req.body.username, email: req.body.userEmail, message: req.body.message, id: req.body.id});
  await new emailService({email: immobilien.formEmail }).sendMessageToOwner(template);
  res.json({
    message: 'success'
  });
});
const filterImmobilien = catchAsync(async (req, res) => {
  let listingType = req.body.listingType;
  let buildingType = req.body.buildingType;
  let city = req.body.city;
  let zip = req.body.zip;
  let filter = {subscriptionExpired: false, subscription: { $ne: {subscriptionType: 'free' } } ,subscriptionPause:false };

  const page = +req.body.page >= 1 ? +req.body.page : 1;
  const limit = 8;
  const skip = (page - 1) * limit;
  if(req.body.maxPrice){
    if(listingType === 'For Rent'){
      Object.assign(filter, {
        rentPrice: { $lte: +req.body.maxPrice.replace('.', '') }
      })
    }else {
      Object.assign(filter, {
        listingPrice: { $lte: +req.body.maxPrice.replace('.', '')  }
      })
    }
  }
  if(listingType){
    Object.assign(filter, {
      listingType
    })
  }
  if(buildingType){
    Object.assign(filter, {
      buildingType
    })
  }
  if(city){
    Object.assign(filter, {
      city
    })
  }
  if(zip){
    Object.assign(filter, {
      zip
    })
  }
  let filterImmobilien = await UserList.find(filter).select(['uniqId', 'entityId', 'listingType', 'listingPrice', 'rentPrice', 'listingTitle', 'zip', 'city']).sort({ createdAt: -1 }).skip(skip).limit(limit);;
  const cognitoToken = await generateCognitoToken();
  const dataTosend = [];
  for (let index = 0; index < filterImmobilien.length; index++) {
    const list = filterImmobilien[index];
    let listMultimedia = await axios.get(`https://api.production.cloudios.flowfact-prod.cloud/multimedia-service/items/entities/${list.entityId}`,{
       headers: {
         cognitoToken
       }
     });
     dataTosend.push({
        price: list.listingType === 'For Sale' ? list.listingPrice : list.rentPrice,
        title: list.listingTitle,
        uniqId: list.uniqId,
        city: list.city,
        zip: list.zip,
        images: listMultimedia.data ? listMultimedia.data.map(img => img.fileReference ) : [],
        page
     });
  }
  res.json({
    message: 'success',
    filterImmobilien: dataTosend
  });
});
const testMounth = (mounth) => {
  let value = 31;
  switch (mounth) {
    case 1:
      value = 28;
      break;
    case 3:
      value = 30;
      break;
    case 5:
      value = 30;
      break;
    case 8:
      value = 30;
      break;
    case 10:
      value = 30;
      break;
  }
  return value;
};
const unpublishExpiredLists = catchAsync(async () => {
  // find records with subscriptionExpire - true
  let lists  = await UserList.find({subscriptionExpire:true, subscriptionExpired: false, activeUntil: { $ne: null}});

  for (let index = 0; index < lists.length; index++) {
    try{
      const list = lists[index];

      console.log('in cron')
      const currentTime = moment().format()
      // check if record expires or not
      const checkExpiryTime = moment(list.activeUntil).isBefore(currentTime);


      if (checkExpiryTime) {

        //we unpablish from portals and set unpablished to true
        switch (list.subscription.subscriptionType) {
          case 'basic' : 
            await publishTo4Platforms(list, false, false, false, false);
            break;
          case 'medium' : 
            await publishTo4Platforms(list, false, false, false, false);
            break;
          case 'premium' : 
            await publishTo4Platforms(list, false, false, false, false);
            break;
        }
        await UserList.findByIdAndUpdate(list._id, {
          subscription: {
            subscriptionType: 'free',
          },
          subscriptionExpire: false,
          subscriptionExpired: true
        })
      }
    }catch(er){
      console.log(new Date(), 'UserList Controller unpublishExpiredLists Err!');
      console.log(er.message);
    }
  }
});
const getImgList  = catchAsync(async (req, res) => {
    // unique bucket name
    const bucketName = '123provisionsfrei-bucket';
    // object key || imgId
    let keyName = `${req.params.imgId}`;
    const objectParams = { Bucket: bucketName, Key: keyName };
    let ext = 'png';
    if(keyName.endsWith('svg')) ext = 'svg+xml';
    if(keyName.endsWith('ico')) ext = 'ico';
    if(keyName.endsWith('jpg')) ext = 'jpg';
    res.set('Content-Type', `image/${ext}`);
    s3.getObject(objectParams).createReadStream().on('error', (er) => {
      if(er){
        console.log(er);
        return res.status(404).json({ error: 'something went wrong' });
      }
        return res.json({data: null});
    }).pipe(res);
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
          await new emailService({name: 'Dominik', email: 'buchung@123provisionsfrei.de'}).EmailMePremium(formData);
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
  const cognitoToken = await generateCognitoToken();
  return res.status(200).json({ cognitoToken });
});

 


module.exports = {
  createList,
  createListValuation,
  getList,
  deleteUserList,
  updateUserList,
  getImgList,
  deleteImage,
  cognitoToken,
  getRecentImmobilien,
  Immobilien,
  filterImmobilien,
  contactImmobilien,
  unpublishExpiredLists, 
  getAllUsers
};
