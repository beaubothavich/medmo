import React from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { createContainer } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base';

import { Temp } from './../api/temp';

import Navigation from './Navigation';
import Readings from './Readings';
    
export class App extends React.Component {
    onLogout() {
        //browserHistory.push('/');
        Accounts.logout();
    }
    
    render() { 
        return (
            <div>
             <Navigation/>
             <h1>Dashboard</h1>
             <Readings temp={this.props.temp} tempAll={this.props.tempAll}/>
            </div>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('temp');
    let tempAll = Temp.find().fetch();
    let temp = Temp.find({}, {limit:1, sort: {created_on:-1}}).fetch();
    return { 
        temp: temp.map((temp) => {
            return {
                ...temp
            }
        }),
        tempAll: tempAll.map((tempAll) => {
            return {
                ...tempAll
            }
        })
    };
}, App);
