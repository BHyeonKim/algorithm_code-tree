const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const N = input[0]
const arr = input[1];
const dp = Array(N).fill(Number.NEGATIVE_INFINITY);

dp[0] = arr[0];

for(let i = 1 ; i < N ; i++){
    dp[i] = Math.max(dp[i-1]+arr[i],arr[i]);
}

console.log(dp[N-1])