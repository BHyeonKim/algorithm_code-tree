const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, x, y] = input[0].split(' ').map(Number);

const X = Math.min(x,y);
const Y = Math.max(x,y);

const distance1 = Math.abs(a-b);

const distance2 = Math.abs(a-X) + Math.abs(b-Y)

console.log(Math.min(distance1, distance2))