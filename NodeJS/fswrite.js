var fs = require('fs');

fs.writeFile('./output.txt', 'hello world', function(err) {
    if(err) {
        console.log(err);
    }

    console.log('output.txt is written');
});