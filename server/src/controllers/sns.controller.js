const { User } = require('../models');
// const AWS = require("aws-sdk");
// AWS.config.update({
//     region: 'eu-central-1'
// });
// const sns = new AWS.SNS();
const handleSnsNotification = async (req, res, next) => {
    try{
        const message = JSON.parse(req.body.Message);
        if (
            (message && message.notificationType == "Bounce") ||
            message.notificationType == "Complaint"
        ) {
            const mail = message.mail;
            if (mail && mail.destination) {
                for (let i = 0; i < mail.destination.length; i++) {
                    const address = mail.destination[i];
    
                    try {
                        const user = await User.findOne({ email: address }).exec();
    
                        if (!user) continue;
                        user.emailError = true;
                        user.emailErrorDescription = message.notificationType;
    
                        await user.save();
                    } catch (error) {
                        console.error(error.message);
                    }
                }
            }
        }

    }catch(er){
        console.log(er);
    }
};
const handleResponse = async (topicArn, req, res, next) => {
    try{
        if (
          req.headers["x-amz-sns-message-type"] === "Notification" &&
          req.body.Message
        ) {
          await handleSnsNotification(req, res, next);
        } else if (
          req.headers["x-amz-sns-message-type"] === "SubscriptionConfirmation"
        ) {
        //   var params = {
        //     Token: req.body.Token,
        //     TopicArn: topicArn
        //   };
        //   sns.confirmSubscription(params, function(err, data) {
        //    if (err) {
        //         return console.log('Error from confirmSubscription' + err);
        //    }; // an error occurred
        //     console.log(data, 'confirmSubscription');
        //    });
        }

    }catch(er){
        console.log(er);
    }
};
const handleBounces = async function(req, res, next) {
    try {
        // console.log(req.body);
        const topicArnBounce = "arn:aws:sns:eu-central-1:147563043845:ses-bounces-topic-prod";
        await handleResponse(topicArnBounce, req, res, next);
    
        res.status(200).json({
            success: true,
            message: "Successfully received message"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
    
}
const handleComplaints = async function(req, res, next) {
    try {
        // console.log(req.body);
        const topicArnComplaint = "arn:aws:sns:eu-central-1:147563043845:handle-complaints-production";
        await handleResponse(topicArnComplaint, req, res);
    
        res.status(200).json({
            success: true,
            message: "Successfully received message."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const handleUnsubscribe = async function(req, res, next) {
    try {
        const user = await User.findById(req.query.email);
        if(user){
            user.emailError = true;
            user.emailErrorDescription = 'the user unsubscribe!';
            await user.save();
        }
        res.status(200).json({
            success: true,
            message: "Successfully."
        });
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    handleResponse,
    handleBounces,
    handleUnsubscribe,
    handleComplaints
};
  