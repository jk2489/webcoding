var express = require('express');
var app = express();
var socketio = require('socket.io');
var cors = require('cors');
var http = require('http');
var database = require('mongodb');

var server = http.createServer(app).listen(app.get('port'), function() {
    console.log('server is running on port: ' + app.get('port'));
    database.init(app, config);
});

var io = socketio.listen(server);
console.log('socket.io is accepted');

io.sockets.on('connection', function(socket) {
    console.log('connection info: ' + ', socket.request.connection._peername');
    socket.remoteAddress = socket.request.connection._peername.address;
    socket.remotePort = socket.request.connection._peername.port;
});