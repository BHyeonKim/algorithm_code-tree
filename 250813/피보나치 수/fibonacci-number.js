const fs = require('fs')
const N = +fs.readFileSync('/dev/stdin').toString().trim()

//BOTTOM UP 방식

const dp = Array(46).fill(0)

dp[1] = 1;
dp[2] = 1;

for(let i = 3 ; i <= N ; i++){
    dp[i] = dp[i-1] + dp[i-2];
}

console.log(dp[N]);