import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import NotFound from '../imports/ui/NotFound';
import HomePage from '../imports/ui/HomePage';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="*" component={NotFound}/>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});