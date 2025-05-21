const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, x, y] = input[0].split(' ').map(Number);

const A = Math.min(a,b);
const B = Math.max(a,b)
const X = Math.min(x,y);
const Y = Math.max(x,y);

const distance1 = Math.abs(a-b);

const distance2 = Math.abs(A-X) + Math.abs(B-Y)

console.log(Math.min(distance1, distance2))