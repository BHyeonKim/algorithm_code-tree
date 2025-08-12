const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString().trim()

const dp = Array(1001).fill(0);

dp[0] = 1;
dp[1] = 2;
dp[2] = 7;

for(let i = 3 ; i <= N ; i++){
    dp[i] = (dp[i-1]*2 + dp[i-2]*3)%1_000_000_007

    for(let j = i - 3 ; j >= 0 ; j--){
        dp[i] = (dp[i]+ dp[j]*2)%1_000_000_007
    }
}

console.log(dp[N])