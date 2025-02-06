const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k, T] = input[0].trim().split(' ');

const words = input.slice(1).map(word=>word.trim()).filter(str=>str.includes(T)).sort();


console.log(words[Number(k)-1])