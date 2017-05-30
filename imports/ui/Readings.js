import React from 'react';
import PropTypes from 'prop-types';
import { Tracker } from 'meteor/tracker';

export default class Readings extends React.Component {
    renderTemp() {
        return this.props.temp.map((attr) =>  {
        //return console.log([attr._id, attr.temp, attr.created_on]);  <p>{attr._id}</p>
            return ( 
                <div key={attr._id}>
                 <p>{attr.temp} Degrees Celsius</p>
                 <p>{attr.created_on}</p>
                 <hr/>
                </div>
            );
        });
    }
    render() { 
        return (
            <div>{this.renderTemp()}</div>
        );   
    }
};

  

  