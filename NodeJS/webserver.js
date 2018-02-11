/* Simple Webserver
var http = require('http');
var server = http.createServer();

var port = 3000;
server.listen(port, function() {
    console.log("web server is running on port %d", port);
});
*/

var http = require('http');
var server = http.createServer();

var host = '10.0.2.15';
var port = 3000;

server.listen(port, host, '50000', function() {
    console.log('web server is running on port %d at %s', port, host);
});