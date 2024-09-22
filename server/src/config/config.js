const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'demo', 'test').required(),
    PORT: Joi.number().default(3000),
    CLIENT_URL: Joi.string().default('123provisionsfrei.de'),
    MONGODB_URL: Joi.string().required().description('Mongo DB url'),
    MONGODB_URL_TEST: Joi.string().required().description('Mongo DB test url'),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description('minutes after which access tokens expire'),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30).description('days after which refresh tokens expire'),
    SMTP_HOST: Joi.string().description('server that will send the emails'),
    SMTP_PORT: Joi.number().description('port to connect to the email server'),
    SMTP_USERNAME: Joi.string().description('username for email server'),
    SMTP_PASSWORD: Joi.string().description('password for email server'),
    EMAIL_FROM: Joi.string().description('the from field in the emails sent by the app'),
    STRIPE_SECRET: Joi.string().required().description('Stripe secret key'),
    PAYPAL_CLIENT_ID: Joi.string().required().description('PAYPAL_CLIENT_ID'),
    PAYPAL_CLIENT_SECRET: Joi.string().required().description('PAYPAL_CLIENT_SECRET'),
    FLOWFACT_TOKEN: Joi.string().required().description('FLOWFACT_TOKEN'),
    IMMOSCOUT24_ID: Joi.string().required().description('IMMOSCOUT24_ID'),
    WORDPRESS: Joi.string().required().description('WORDPRESS'),
    EBAY_KLEINANZEIGEN_ID: Joi.string().required().description('EBAY_KLEINANZEIGEN_ID'),
    IMMOWELT_IMMONET_ID: Joi.string().required().description('IMMOWELT_IMMONET_ID'),
    AWS_ACCESS_KEY_ID: Joi.string().required().description('AWS_ACCESS_KEY_ID'),
    AWS_SECRET_ACCESS_KEY: Joi.string().required().description('AWS_SECRET_ACCESS_KEY')
    // STRIPE_SECRET_TEST: Joi.string().required().description('Stripe test secret key'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  corsOrigin: envVars.NODE_ENV === 'production' ? envVars.CLIENT_URL : '*',
  clientURL: envVars.NODE_ENV === 'production' ? envVars.CLIENT_URL : '123provisionsfrei.de',
  serverURL: envVars.NODE_ENV === 'production' ? envVars.SERVER_URL : '123provisionsfrei.de',
  mongoose: {
    url: envVars.NODE_ENV === 'test' ? envVars.MONGODB_URL_TEST : envVars.MONGODB_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: 10,
    emailVerificationExpirationDays: 15,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
  stripe: {
    secret: envVars.NODE_ENV === 'production' ? envVars.STRIPE_SECRET : envVars.STRIPE_SECRET,
  },
};
