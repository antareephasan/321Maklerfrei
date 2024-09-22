
var AWS = require('aws-sdk');


const awsConfig =   {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretKetId: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'eu-central-1'
  }
  
  const SES = new AWS.SES(awsConfig);
  
  const sendEmail = async (req, res) => { 

    const reqData = req.body.data 
    const email = req.body.email 

    const BccEmail = "321maklerfrei.de+a51280bceb@invite.trustpilot.com"
    try {
       
       const params ={
        Source:"321maklerfrei<hallo@321maklerfrei.de>",
        Destination:{
            ToAddresses: [email] ,
            CcAddresses: [BccEmail],
        },
        Message:{
          Subject:{
            Charset: "UTF-8",
            Data: 'Danke für dein Vertrauen!'
          },
          Body:{
            Html:{
              Charset: "UTF-8",
              Data:`<h2> ${reqData} </h2>`
            }
          },
        }, 
       };
  
       const emailSent = await SES.sendEmail(params).promise();
       emailSent
       .then((data) => console.log("email send success", data))
       .catch(err =>{
        console.log(err);
       })
      
  
      const response = {
        status: "success", 
      };
  
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ massages: "Internal Server Error" });
    }
  }
  


module.exports = {
    sendEmail,
};
  