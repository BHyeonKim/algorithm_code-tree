const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K] = input[0].trim().split(' ').map(Number);
const arr = [0, ...input[1].trim().split(' ').map(Number)];

const prefixSum = Array.from({length: arr.length},()=>0);



prefixSum[1] = arr[1];

for(let i = 2 ; i < arr.length ; i++){
    prefixSum[i] = prefixSum[i-1] + arr[i];
}

let ans = 0;

for(let i = 0 ; i + K < prefixSum.length ; i++){
    ans = Math.max(ans, prefixSum[i+K]-prefixSum[i])
}

console.log(ans)