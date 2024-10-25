import "./App.css"
import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import ForwardRoute from "./components/Routes/ForwardRoute";

const Layout = lazy(() => import("./containers/Layout"));
const Auth = lazy(() => import("./containers/Auth"));
const Landing = lazy(() => import("./pages/Landing"));
const Immobilien = lazy(() => import("./pages/Immobilien"));
const oneList = lazy(() => import("./pages/oneList"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Unsubscribe = lazy(() => import("./pages/Unsubscribe"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const Widerrufsbelehrung = lazy(() => import("./pages/Widerrufsbelehrung"));
const Agb = lazy(() => import("./pages/Agb"));
const EmailVerification = lazy(() => import("./pages/EmailVerification"));
const Ads = lazy(() => import("./pages/Ads"));
const AdDetails = lazy(() => import("./pages/AdDetails"));


function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <ForwardRoute path="/auth" component={Auth} />
          <Route exact path="/impressum" component={Impressum} />
          <Route exact path="/immobilien/:page" component={Immobilien} />
          <Route exact path="/immobilien/id/:id" component={oneList} />
          <Route exact path="/datenschutz" component={Datenschutz} />
          <Route exact path="/unsubscribe" component={Unsubscribe} />
          <Route exact path="/widerrufsbelehrung" component={Widerrufsbelehrung} />
          <Route exact path="/agb" component={Agb} />
          <Route exact path="/ads" component={Ads} />
          <Route exact path="/ads/:id" component={AdDetails} />
          {/* Place new routes over this */}
          <ProtectedRoute path="/app" component={Layout} />
          <Route exact path="/verify-email" component={EmailVerification} />
          <Route exact path="/" component={Landing} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
