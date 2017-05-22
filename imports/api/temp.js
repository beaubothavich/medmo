import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const Temperature = new Mongo.Collection('temp');
WebApp.connectHandlers.use(Meteor.bindEnvironment(app));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//let POST = () => {
	app.post('/api/temp', (req, res) => {
		let temp = req.body.temp;
		let authToken = req.body.token;

		if (authToken != '65beb48699b1e32986c50ee01fc1f4d3a0343f133cfff657b584863035bb14d3') {
			console.log('Authenticaion Failed!');
			res.send('Authenticaion Failed!');
		} else {
			console.log('Current Temperature : ' + temp + '°C')
			res.send('Current Temperature : ' + temp + '°C')
  			Temperature.insert({ text: temp });
			res.end('OK');
		}
	});
//}

//export default POST;


//65beb48699b1e32986c50ee01fc1f4d3a0343f133cfff657b584863035bb14d3