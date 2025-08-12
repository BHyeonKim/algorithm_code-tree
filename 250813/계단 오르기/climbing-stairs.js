const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString().trim()

const dp = Array(1001).fill(0);

dp[2] = 1;
dp[3] = 1;

for(let i = 4 ; i <= N ; i++){
    dp[i] = dp[i-2] + dp[i-3]
}

console.log(dp[N])