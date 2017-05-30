import React from 'react';
import PropTypes from 'prop-types';
import  Gauge  from 'react-svg-gauge';

export default class Readings extends React.Component {
    renderTemp() {
        return this.props.temp.map((attr) =>  {
        //return console.log([attr._id, attr.temp, attr.created_on]);  <p>{attr._id}</p>
            return ( 
                <div key={attr._id}>
                 <p>{attr.temp} Degrees Celsius</p>
                 <p>{attr.created_on}</p>
                 <Gauge value={attr.temp} width={400} height={320} color="#ee6e73" label="Temperature °C" />
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

  

  