import React from 'react';
import PropTypes from 'prop-types';
import  Gauge  from 'react-svg-gauge';
import moment from 'moment-timezone';
//.format('MMMM Do YYYY, h:mm:ss a')  moment.
export default class Readings extends React.Component {
    renderTemp() {
        return this.props.temp.map((attr) =>  {
        //return console.log([attr._id, attr.temp, attr.created_on]);  <p>{attr._id}</p>
            let temp = attr.temp;
            let formatted = moment(attr.created_on).format('MMMM Do YYYY, h:mm:ss a');
            if (temp > 35) {
                console.log(temp)
                alert('WARNING: Temperature is > 35 Current Temperature: ' + temp );
            }
            return ( 
                <div key={attr._id}>
                 <p>{temp} Degrees Celsius</p>
                 <p>{formatted}</p>
                 <Gauge value={temp} width={400} height={320} color="#ee6e73" label="Temperature °C" />
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

  

  