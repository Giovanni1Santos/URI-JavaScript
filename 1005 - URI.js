var input = require('fs').readFileSync('stdin', 'utf8');

var [a,b] = input.split('\n').map(Number);
var x = ((a*3.5)+(b*7.5))/11;
console.log('MEDIA = ' + x.toFixed(5));