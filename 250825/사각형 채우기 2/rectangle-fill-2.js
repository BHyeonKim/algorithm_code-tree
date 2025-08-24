const fs = require('fs')
const N = +fs.readFileSync('/dev/stdin').toString().trim() 

const dp = Array(N+1).fill(0);

dp[1] = 1;
dp[2] = 3;
dp[3] = 5;

for(let i = 4 ; i <= N ; i++){
    dp[i] = dp[i-1] + dp[i-2] * 2
}

console.log(dp[N])