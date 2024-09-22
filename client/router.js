import React from 'react';
import { Switch, Route } from 'react-router';

export default (
  <Switch>
    <Route exact path="/impressum" />
    <Route exact path="/datenschutz" />
    <Route exact path="/unsubscribe" />
    <Route exact path="/widerrufsbelehrung" />
    <Route exact path="/agb" />
  </Switch>
)