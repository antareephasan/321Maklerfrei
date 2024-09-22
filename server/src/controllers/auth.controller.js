const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const shortid = require('shortid');
const { authService, userService, tokenService, emailService, stripeService } = require('../services');

const register = catchAsync(async (req, res) => {
  const { name, email } = req.body
  const stripeUser = await stripeService.createCustomer(name, email);
  req.body.sepaClientSecret = await stripeService.setupSEPACustomer(stripeUser.id);
  req.body.stripeId = stripeUser.id;
  req.body.customerId = shortid.generate();
  const user = await userService.createUser(req.body);
  //create flowfact contact
  
  const tokens = await tokenService.generateAuthTokens(user);
  const emailVerificationToken = await tokenService.generateEmailVerificationToken(user);
  await new emailService({name: user.name, email, userId: user._id}).sendEmailVerificationEmail(emailVerificationToken);
  await new emailService({name: user.name, email, userId: user._id}).createFirstList();
  res.cookie('refreshToken', tokens.refresh.token, { maxAge: tokens.refresh.maxAge, httpOnly: true, sameSite: 'none', secure: true }).status(httpStatus.CREATED).send({ user, token:tokens.access });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.cookie('refreshToken', tokens.refresh.token, { maxAge: tokens.refresh.maxAge, httpOnly: true, sameSite: 'none', secure: true }).send({ user, token:tokens.access });
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.cookies.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const {user, tokens} = await authService.refreshAuth(req.cookies.refreshToken);
  res.cookie('refreshToken', tokens.refresh.token, { maxAge: tokens.refresh.maxAge, httpOnly: true, sameSite: 'none', secure: true }).send({ user, token:tokens.access });
});

const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.email);
  await new emailService({name: '', email: req.body.email}).sendResetPasswordEmail(resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = catchAsync(async (req, res) => {
  await authService.resetPassword(req.query.token, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

const emailVerification = catchAsync(async (req, res) => {
  const user = await authService.emailVerification(req.query.token);
  res.send({isEmailVerified: !!user.isEmailVerified});
});

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  emailVerification,
};
