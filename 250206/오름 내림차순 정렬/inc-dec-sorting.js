const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);

console.log(arr.sort((a,b)=>a-b).join(' ') + "\n" + arr.sort((a,b)=>b-a).join(' '))

