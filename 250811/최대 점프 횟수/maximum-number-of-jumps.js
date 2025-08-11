const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0]
const arr = input[1].split(' ').map(Number);

const dp = Array(N).fill(Number.MIN_SAFE_INTEGER);

dp[0] = 0;

for(let i = 1 ; i < N ; i++){
    for(let j = 0 ; j < i ; j++){
        if(dp[j] === Number.MIN_SAFE_INTEGER) continue;

        if(j + arr[j] >= i){
            dp[i] = Math.max(dp[i], dp[j]+1)
        }
    }
}  

console.log(Math.max(...dp))