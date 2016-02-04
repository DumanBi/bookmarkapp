'use strict';

var express = require('express'),
	app 	= express(),
	mock	= require('./mock.js'),
	update	= require('./update.js'),
	bodyParser = require('body-parser');;

app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.get('/mock/*', mock);
app.post('/mock/*', update);

app.get('/*', express.static( __dirname + '/../' ));

app.listen(3000);

console.info('Server started, go to localhost:3000');
