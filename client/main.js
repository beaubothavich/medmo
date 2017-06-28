import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { routes, onAuthChange } from './../imports/routes/routes';
import App from './../imports/ui/App';
import { Temp } from './../imports/api/temp';

//Meteor.subscribe('temp');
  Tracker.autorun(function () {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
    console.log('isAuthenticated', isAuthenticated);
  });
Meteor.startup(() => {
  //Tracker.autorun(function () {
  //let temp = Temp.find({}, {limit:1, sort: {created_on:-1}}).fetch();
  //let temp = Temp.find().fetch(); //get all
  Session.set('showVisible', true);
  ReactDOM.render(routes, document.getElementById('app'));  
  //ReactDOM.render(<App temp={temp}/>, document.getElementById('app'));  
});
//});
//db.collection.find().limit(1).sort({$natural:-1})