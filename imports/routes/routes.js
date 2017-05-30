import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import App from '../ui/App';
import { Temp } from './../api/temp';
import { Tracker } from 'meteor/tracker';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="*" component={NotFound}/>
  </Router>
);