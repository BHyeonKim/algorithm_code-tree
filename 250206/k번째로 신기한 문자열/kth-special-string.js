const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [_, k, T] = input[0].trim().split(' ');

const words = input.slice(1, k+1).map(word=>word.trim()).filter(str=>str.startsWith(T)).sort();


console.log(words[k-1]);