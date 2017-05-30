import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { createContainer } from 'meteor/react-meteor-data'

import { Temp } from './../api/temp';

import Navigation from './Navigation';
import Readings from './Readings';
    
export class App extends React.Component {
    render() { 
        return (
            <div>
             <Navigation/>
             <h1>HomePage</h1>
             <Readings temp={this.props.temp}/>
            </div>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('temp');
    let temp = Temp.find().fetch();
    //let temp = Temp.find({}, {limit:1, sort: {created_on:-1}}).fetch();
    return { 
        temp: temp.map((temp) => {
            return {
              ...temp
            }
        })
    };
}, App);

/*export default class App extends React.Component {
        
        
        render() { 
            return (
                <div>
                 <Navigation/>
                 <h1>HomePage</h1>
                 <Readings temp={this.props.temp}/>
                </div>
            );
        }
    }*/