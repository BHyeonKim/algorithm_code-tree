const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const words = input.slice(1, n + 1);

console.log(words.sort().join('\n').trim());