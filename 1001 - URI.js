var input = require("fs").readFileSync("stdin", "utf8");

const [a, b] = InputDeviceInfo.split('\n').map(Number);
x = a+b;

console.log(`X = ${x}`);
