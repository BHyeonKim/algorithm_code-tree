const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n');

const k = input[0].split(' ').map(Number)[1];
const numbers = input[1].split(' ').map(Number);

console.log(numbers.sort((a,b)=>a-b)[k-1])