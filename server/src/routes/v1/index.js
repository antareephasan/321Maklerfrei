const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const stripeRoute = require('./stripe.route');
const userList = require('./userList.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const packagesRoute = require('./packages.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/stripe',
    route: stripeRoute,
  },
  {
    path: '/userList',
    route: userList,
  },
  {
    path: '/package',
    route: packagesRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
