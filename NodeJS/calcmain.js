var Calc = require('./calc3');

var calc = new Calc();
calc.emit('stop');

console.log(Calc.title + ' -> stop event');