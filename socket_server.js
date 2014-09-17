var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());
var fs = require('fs');
var port = 40001;

var io = require('socket.io').listen(app.listen(port));

var subscribers = [];

app.post('/', function(req, res) {
	console.log('getting a post request');
	var val = req.body.message;
	console.log(val);
	io.sockets.emit('message', { 'value' : val }); 
	res.writeHead(200);
	res.end();
	});

app.get('/test', function(req, res) {
	console.log('receiving get request');
	res.writeHead(200);
	res.end();
	});

//io.sockets.on('connection', function(socket) {   socket.emit('message', { 'value' : 'Hello World!' }); });

io.sockets.on('subscribe', function(data) { console.log('just got a new subscriber with id '+id)});
