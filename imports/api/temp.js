import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const Temp = new Mongo.Collection('temp');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
WebApp.connectHandlers.use(Meteor.bindEnvironment(app));

app.post('/api/temp', Meteor.bindEnvironment((req, res) => {
		let temp = parseInt(req.body.temp);
		let authToken = req.body.token;

		if (authToken != '65beb48699b1e32986c50ee01fc1f4d3a0343f133cfff657b584863035bb14d3') {
			console.log('Authenticaion Failed!');
			res.send('Authenticaion Failed!');
		} else {
			console.log('Current Temperature : ' + temp + '°C')
			res.send('Current Temperature : ' + temp + '°C')
<<<<<<< HEAD
			Temp.insert({ Temp: temp });
=======
>>>>>>> e72c072f766c46f8dff4e609b49413c5322119a0
			res.end('OK');
		}
	}));

//65beb48699b1e32986c50ee01fc1f4d3a0343f133cfff657b584863035bb14d3