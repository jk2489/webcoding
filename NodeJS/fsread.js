var fs = require('fs');

var filename = './nodeindex.js';

fs.readFile(filename, 'utf8', function(err, data) {
    console.log(data);
});

console.log('requested to read %s', filename.substring(2));