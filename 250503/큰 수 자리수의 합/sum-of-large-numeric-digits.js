const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

console.log(String(a*b*c).split('').reduce((acc,val)=>acc+=Number(val),0))