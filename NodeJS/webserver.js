var http = require('http');
var server = http.createServer();

var port = 3000;
server.listen(port, function() {
    console.log("web server is running on port %d", port);
});