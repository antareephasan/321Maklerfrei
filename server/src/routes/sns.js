const express = require('express');
const AWS = require("aws-sdk");
const catchAsync = require('./../utils/catchAsync');
AWS.config.update({
    region: 'eu-central-1'
});
const sns = new AWS.SNS();
const snsController = require('./../controllers/sns.controller');
//!Router FNK
const snsRouter = express.Router();

const topicArnBounce = "arn:aws:sns:eu-central-1:147563043845:ses-bounces-topic-prod";
var paramsTopicBounces = {
  Protocol: "https",
  TopicArn: topicArnBounce,
  Endpoint: "https://123provisionsfrei.de/aws/sns/handle-bounces"
};
const topicArnComplaint = "arn:aws:sns:eu-central-1:147563043845:handle-complaints-production";
var paramsTopicComplaints = {
  Protocol: "https",
  TopicArn: topicArnComplaint,
  Endpoint: "https://123provisionsfrei.de/aws/sns/handle-complaints"
};
catchAsync(sns.subscribe(paramsTopicBounces, function(error, data) {
    if (error) {
        return console.log(error);
    }
    //console.log(`SNS subscription set up successfully: ${JSON.stringify(data)}`);
}));
catchAsync(sns.subscribe(paramsTopicComplaints, function(error, data) {
    if (error) {
        return console.log(error);
    }
    //console.log(`SNS subscription set up successfully: ${JSON.stringify(data)}`);
}));


snsRouter.post("/sns/handle-bounces", snsController.handleBounces);
snsRouter.post("/sns/handle-complaints", snsController.handleComplaints);
snsRouter.post("/unsubscribe", snsController.handleUnsubscribe);

module.exports = snsRouter;