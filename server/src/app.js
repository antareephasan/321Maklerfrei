const express = require('express');
const path = require('path');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const passport = require('passport');
const httpStatus = require('http-status');
const config = require('./config/config');
const morgan = require('morgan');
const { jwtStrategy } = require('./config/passport');
const { authLimiter } = require('./middlewares/rateLimiter');
const routes = require('./routes/v1');
const snsRouter = require(`${__dirname}/routes/sns`);
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const cookieParser = require('cookie-parser');

const app = express();

app.use(morgan('dev'));

if (config.env !== 'test') {
  // app.use(morgan.successHandler);
  // app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
//app.use(express.json({ limit: '500mb' }));
app.use(
  express.json({
    type: [
      'application/json',
      'text/plain', // AWS sends this content-type for its messages/notifications
    ],
    limit: '500mb',
  })
);
app.use(cors());
app.use('/aws', snsRouter);
// parse urlencoded request body
app.use(express.urlencoded({ extended: false, limit: '500mb' }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// parse cookies
app.use(cookieParser());

//serving static files
//app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/build')));
// enable cors
// const corsConfig = {origin: config.corsOrigin, credentials: true, allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization"};
// app.use(cors(corsConfig));
// app.options('*', cors(corsConfig));

// jwt authentication
app.use((req, res, next) => {
  if (req.url.includes('/v1/')) {
    passport.initialize();
    passport.use('jwt', jwtStrategy);
    return next();
  }
  next();
});
// app.use(passport.initialize());

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
  app.use('/v1/auth', authLimiter);
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.set(
    'Content-Security-Policy',
    "default-src 'self' http://*; media-src 'self' http://*  data: blob: 'unsafe-inline';font-src http://* 'self' data:; img-src http://* 'self' data: blob:; style-src http://* 'self' http://* 'unsafe-inline';child-src 'self' http://* blob: data: 'unsafe-inline';worker-src 'self' http://* blob: data: 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
  );
  next();
});

// v1 api routes
app.use('/v1', routes);

//the view
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'home.html'));
});

// send back a 404 error for any unknown api request
// app.use((req, res, next) => {
//   next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
// });

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
