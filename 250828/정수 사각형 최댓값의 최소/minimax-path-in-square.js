const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const map = input.slice(1).map(line=>line.split(' ').map(Number));
const dp = Array.from({length:N},()=>Array.from({length:N},()=>0));

dp[0][0] = map[0][0]

for(let i = 1 ; i < N ; i++){
    dp[i][0] = Math.max(map[i][0],dp[i-1][0]);
}

for(let i = 1 ; i < N ; i++){
    dp[0][i] = Math.max(map[0][i],dp[0][i-1]);
}

for(let i = 1 ; i < N ; i++){
    for(let j = 1 ; j < N ; j++){
        dp[i][j] = Math.max(Math.min(dp[i-1][j],dp[i][j-1]),map[i][j]);
    }
}

console.log(dp[N-1][N-1])