const mongoose = require('mongoose');
const { stripeService } = require('./services');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const AWS = require("aws-sdk");
const axios = require("axios");
const cron = require("node-cron");
const { generateCognitoToken } = require('./services/flowfact.service');
const { unpublishExpiredLists } = require('./controllers/userList.controller');
let server;

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
stripeService.loadStripeProducts().then(async () => {
  // const cognitoToken = await generateCognitoToken();
  // let x = await axios.get(`https://api.production.cloudios.flowfact-prod.cloud/portal-management-service/portals` , {
  //   headers: {
  //     cognitoToken
  //   }
  // });
  // console.log(x.data);
  // let data = await axios.get(`https://api.production.cloudios.flowfact-prod.cloud/entity-service/schemas/house_purchase/entities/5e416b3e-6b1c-43f1-ae51-bc00075af9e7`,{
  //   headers: {
  //     cognitoToken
  //   }
  // });
  // console.log(data.data);
  logger.info('Loaded Stripe Data');
  mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
    logger.info('Connected to MongoDB');
    server = app.listen(config.port, () => {
      logger.info(`Listening to port ${config.port}`);
    });
  });
});

//Running a task every day at midnight
cron.schedule("0 0 0 * * *", unpublishExpiredLists );
// cron.schedule("* * * * * ", unpublishExpiredLists );

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
