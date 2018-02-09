var fs = require('fs');

var inname='output1.txt';
var outname='output2.txt';

fs.exists(outname, function(exists) {
    if(exists) {
        fs.unlink(outname, function(err) {
            if(err) { 
                throw err;
            }
            console.log('original file ' + outname + ' is deleted');
        });
    }

    var infile = fs.createReadStream(inname, {flags: 'r'});
    var outfile = fs.createWriteStream(outname, {flags: 'w'});
    infile.pipe(outfile);
    console.log('file duplicated ' + inname + '->' + outname);
});