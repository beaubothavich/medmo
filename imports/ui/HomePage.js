import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Temp } from './../api/temp';

import Navigation from '/imports/ui/Navigation'; //add / infront to import from same folder

const renderTemp = (TempObj) => {
    return TempObj.map((attr) =>
        {
            console.log(attr._id);
            console.log(attr.temp);
            console.log(attr.created_on);
        }
    )};

Tracker.autorun(function () {
    let temp = Temp.find().fetch();
    //console.log('Temp list', temp);
    renderTemp(temp);

    export default class HomePage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            error: ''
        };
    }

        render() { 
            return (
                <div>
                 <Navigation/>
                 <h1>HomePage</h1>
                </div>
            );
        }
    }
});