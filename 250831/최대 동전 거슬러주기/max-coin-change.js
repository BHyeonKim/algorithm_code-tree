const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [_, M] = input[0];
const coins = input[1];

const dp = Array(M+1).fill(0);


for(let i = 1 ; i <= M ; i++){
    for(const coin of coins){
        if(i >= coin){
            dp[i] = Math.max(dp[i-coin]+1,dp[i]);
        }
    }   
}

console.log(dp[M] === 0 ? -1 : dp[M])

