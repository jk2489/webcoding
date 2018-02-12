var http = require('http');
var server = http.createServer();

var port = 3000;
server.listen(port, function() {
    console.log('web server is running at port %d...', port);
});

server.on('connection', function(socket) {
    var addr = socket.address();
    console.log('client is accessed: %s, %d', addr.address, addr.port);
});

server.on('request', function(req, res) {
    console.log('client request is on');
    console.dir(req);
});

server.on('close', function() {
    console.log('server is terminated');
});