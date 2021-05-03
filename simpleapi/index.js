//import express and cors
const cors = require('cors');
const express = require('express');

//create the express app with cors enabled
const app = express();
app.use(cors());
app.options('*', cors());

//define port

const port = 8085;

// define root controller (GET)
app.get('/', (req, res, next) => {
	res.send('welcome to my api...');
});

//define GET controller for 
app.get('/Suma', (req,res,next) => {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	
	console.log(x);
	console.log(y);
	
	var suma = (x+y);
	var objResult = {
		suma:suma
	}
	res.send(objResult);

});

//define GET controller for 
app.get('/Resta', (req,res,next) => {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	
	console.log(x);
	console.log(y);
	
	var suma = (x-y);
	var objResult = {
		suma:suma
	}
	res.send(objResult);

});

//define GET controller for 
app.get('/Multi', (req,res,next) => {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	
	console.log(x);
	console.log(y);
	
	var suma = (x*y);
	var objResult = {
		suma:suma
	}
	res.send(objResult);

});

//define GET controller for 
app.get('/Division', (req,res,next) => {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	
	console.log(x);
	console.log(y);
	
	var suma = (x/y);
	var objResult = {
		suma:suma
	}
	res.send(objResult);

});

//define GET controller for 
app.get('/Pow', (req,res,next) => {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	
	console.log(x);
	console.log(y);
	
	var suma = Math.pow(x,y);
	var objResult = {
		suma:suma
	}
	res.send(objResult);

});

//define GET controller for 
app.get('/Root', (req, next) => {
	var x = parseInt(req.query.x);
	
	console.log(x);
	
	var suma = Math.sqrt(x);
	var objResult = {
		suma:suma
	}
	res.send(objResult);

});

//define GET controller for 
app.get('/Squared', (req,next) => {
	var x = parseInt(req.query.x);
	
	console.log(x);
	
	var suma = Math.pow(x,2);
	var objResult = {
		suma:suma
	}
	res.send(objResult);

});


app.listen(port, () => 
	console.log('listening on port ' + port)
);
