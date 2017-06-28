import React from 'react';
import PropTypes from 'prop-types';
import Gauge  from 'react-svg-gauge';
import moment from 'moment-timezone';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
//.format('MMMM Do YYYY, h:mm:ss a')  moment.

export default class Readings extends React.Component {
    notifyMe(warning) {
        let theWarning = warning; 
        if (!("Notification" in window)) {
        alert("This browser does not support system notifications");
        } else if (Notification.permission === "granted") {
            var notification = new Notification(theWarning);
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                if (permission === "granted") {
                var notification = new Notification(theWarning);
                }
            });
        }
    }
    renderTemp() {
        return this.props.temp.map((attr) =>  {
        //return console.log([attr._id, attr.temp, attr.created_on]);  <p>{attr._id}</p>
            let temp = attr.temp;
            let formatted = moment(attr.created_on).format('MMMM Do YYYY, h:mm:ss a');
            if (temp > 35) {
                //console.log(temp)
                let warning = 'WARNING: Temperature is > 35 Current Temperature: ' + temp; 
                //console.log(warning);
                 let bound = this.notifyMe.bind(warning);
                 bound(warning);
                //alert('WARNING: Temperature is > 35 Current Temperature: ' + temp );
            }
            
            return ( 
                <div key={attr._id}>
                 <p>{temp} Degrees Celsius</p>
                 <p>{formatted}</p>
                 <Gauge value={temp} width={300} height={220} color="#ee6e73" label="Temperature °C" />
                 <hr/>
                </div>
            );
        });
    }
    renderChart() {
        let temp = [];
        let formatted = [];
        this.props.tempAll.map((attr) => {
            temp.push(attr.temp);
            formatted.push(moment(attr.created_on).format('MM/DD/YY HH:mm'));
        });
        //console.log(temp);
        //console.log(formatted);
        
         let data = [
            {name: formatted[formatted.length-1200], Temperature: temp[temp.length-1200], MaxThreshold: 35, MinThreshold: 2},
            {name: formatted[formatted.length-1000], Temperature: temp[temp.length-1000], MaxThreshold: 35, MinThreshold: 2},
            {name: formatted[formatted.length-800], Temperature: temp[temp.length-800], MaxThreshold: 35, MinThreshold: 2},
            {name: formatted[formatted.length-600], Temperature: temp[temp.length-600], MaxThreshold: 35, MinThreshold: 2},
            {name: formatted[formatted.length-400], Temperature: temp[temp.length-400], MaxThreshold: 35, MinThreshold: 2},
            {name: formatted[formatted.length-200], Temperature: temp[temp.length-200], MaxThreshold: 35, MinThreshold: 2},
            {name: formatted[formatted.length-1], Temperature: temp[temp.length-1], MaxThreshold: 35, MinThreshold: 2}
        ];
        
        return (
    	    <LineChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
             <XAxis dataKey="name"/>
             <YAxis/>
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend/>
             <Line type="monotone" dataKey="Temperature" stroke="#8884d8" activeDot={{r: 8}}/>
             <Line type="monotone" dataKey="MaxThreshold" stroke="#C70039" />
             <Line type="monotone" dataKey="MinThreshold" stroke="#33A8FF" />
            </LineChart>
        );
    }
    render() { 
        return (
            <div>
            <div>{this.renderTemp()}</div>
            <div>{this.renderChart()}</div>
            </div>
        );   
    }
};

  

  