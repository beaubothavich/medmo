import { Mongo } from 'meteor/mongo';
export const Temp = new Mongo.Collection('temp');

//if ran "meteor remove autopublish" must run function below
if (Meteor.isServer) {
    Meteor.publish('Temp', function() {
        return Temp.find();
    });
}