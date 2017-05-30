import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

import { routes } from './../imports/routes/routes';
import App from './../imports/ui/App';
import { Temp } from './../imports/api/temp';

//Meteor.subscribe('temp');

Meteor.startup(() => {
  //Tracker.autorun(function () {
  //let temp = Temp.find({}, {limit:1, sort: {created_on:-1}}).fetch();
  //let temp = Temp.find().fetch(); //get all
  ReactDOM.render(routes, document.getElementById('app'));  
  //ReactDOM.render(<App temp={temp}/>, document.getElementById('app'));  
});
//});
//db.collection.find().limit(1).sort({$natural:-1})