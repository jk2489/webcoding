var url = require('url');

var curURL = url.parse('http://www.naver.com');
var curStr = url.format(curURL);

console.log('%s', curStr);
console.dir(curURL);