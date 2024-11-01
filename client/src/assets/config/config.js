const Joi = require("joi");

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "demo", "test")
      .required(),
    REACT_APP_API_URL: Joi.string()
      .default("")
      .description("backend server url"),
    REACT_APP_STRIPE_PUBLIC_KEY: Joi.string()
      .required()
      .description("Stripe public key"),
    REACT_APP_USERS_PER_PAGE: Joi.number()
      .default(10)
      .description("number of users per page in users table"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  api: {
    url:  envVars.REACT_APP_API_URL || "http://locahost:5000",
  },
  stripe: {
    publicKey: envVars.REACT_APP_STRIPE_PUBLIC_KEY,
  },
  users: {
    resultsPerPage: envVars.REACT_APP_USERS_PER_PAGE,
  },
};
