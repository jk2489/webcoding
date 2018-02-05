var output = 'hello1';
var buffer1 = new Buffer(10);
var len = buffer1.write(output, 'utf8');
console.log('%s', buffer1.toString().trim());

var buffer2 = new Buffer('hello2', 'utf8');
console.log('%s', buffer2.toString());

console.log('%s', Buffer.isBuffer(buffer1));

buffer1.copy(buffer2, 0, 0, len);
console.log('%s', buffer2.toString('utf8'));