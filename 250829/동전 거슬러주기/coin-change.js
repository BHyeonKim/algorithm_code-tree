const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const MAX_COIN = 10001
const [N, M] = input[0];
const coins = input[1];

const dp = Array.from({length:M+1},()=>MAX_COIN);

dp[0] = 0

for(const coin of coins){
    dp[coin] = 1;
}

for(let i = 0 ; i <= M ; i++){
    for(const coin of coins){
        if(i+coin > M) continue;
        dp[i+coin] = Math.min(dp[i+coin], dp[i]+1);
    }
}

console.log(dp[M] === MAX_COIN ? -1 : dp[M])