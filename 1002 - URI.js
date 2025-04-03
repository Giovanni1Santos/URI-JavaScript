var input = require('fs').readFileSync('stdin', 'utf8');
var [r] = input.split('\n').map(Number);
var x = (r*r)*(3.14159);
console.log(`A=${x.toFixed(4)}`);