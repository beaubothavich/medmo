import { Meteor } from 'meteor/meteor';
import './../imports/api/postTemp';
import { Temp } from './../imports/api/temp';
Meteor.startup(() => {
 console.log(Temp.find().fetch());
});
