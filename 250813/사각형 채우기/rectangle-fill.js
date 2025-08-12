const fs = require('fs')
const N = +fs.readFileSync('/dev/stdin').toString().trim()

const dp = Array(1001);

dp[1] = 1;
dp[2] = 2;

for(let i = 3 ; i <= N ; i++){
    dp[i] = (dp[i-1]+dp[i-2]) % 10007
}

console.log(dp[N])