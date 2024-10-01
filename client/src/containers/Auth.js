import React, { lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const Login = lazy(() => import('../pages/Login'))
const CreateAccount = lazy(() => import('../pages/CreateAccount'))
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'))
const ResetPassword = lazy(() => import('../pages/ResetPassword'))
const ActiveAccountOTP = lazy(() => import('../pages/ActiveAccountOTP'))
const RecoverPassword = lazy(() => import('../pages/RecoverPassword'))

function Auth() {
  return (
    <Switch>
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/create-account" component={CreateAccount} />
      <Route exact path="/auth/forgot-password" component={ForgotPassword} />
      <Route exact path="/auth/recover-password" component={RecoverPassword} />
      <Route exact path="/auth/active-account" component={ActiveAccountOTP} />
      <Route exact path="/auth/reset-password" component={ResetPassword} />
      <Redirect from="/auth" to="/auth/login" />
    </Switch>
  )
}

export default Auth
