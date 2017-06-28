import { Meteor } from 'meteor/meteor';
import './../imports/api/postTemp';
import { Temp } from './../imports/api/temp';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';
import '../imports/startup/simple-schema-configuration.js';
Meteor.startup(() => {
    //console.log(Temp.find().fetch());
    Accounts.validateNewUser((user) => {
        const email = user.emails[0].address;
        try {
            new SimpleSchema({
                email: {
                    type: String,
                    regEx: SimpleSchema.RegEx.Email
                }
            }).validate({ email });
        } catch (e) {
            throw new Meteor.Error(400, e.message);
        }
        return true;
    });

});
