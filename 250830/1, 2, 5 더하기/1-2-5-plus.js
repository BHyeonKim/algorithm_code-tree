const fs = require('fs');
const N = +fs.readFileSync('/dev/stdin').toString().trim();

const numbers = [1,2,5];

const dp = Array(N+1).fill(0);

dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

for(let i = 4 ; i <= N ; i++){
    for(const n of numbers){
        if(i >= n){
            dp[i] = (dp[i] + dp[i - n]) % 10007;
        }
    }
}

console.log(dp[N])