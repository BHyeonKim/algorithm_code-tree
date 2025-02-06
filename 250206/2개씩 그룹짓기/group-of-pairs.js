const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].trim().split(' ').map(Number).sort((a,b)=>a-b);

let maxV = arr[0] + arr[arr.length-1];

const mid = arr.length / 2
for(let i = 1 ; i < mid ; i++){
    const num = arr[i]+arr[arr.length-1 - i];
    maxV = maxV > num ? maxV : num;
}

console.log(maxV)