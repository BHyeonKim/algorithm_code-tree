const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0]
const grid = input.slice(1).map(line=>line.split(' ').map(Number));
const dp = Array.from({length:N},()=>Array.from({length:N},()=>0));

dp[0][0] = grid[0][0]

for(let i = 1 ; i < N ; i++){
    dp[i][0] = Math.min(dp[i-1][0], grid[i][0])
}

for(let j = 1 ; j < N ; j++){
    dp[0][j] = Math.min(dp[0][j-1],grid[0][j])
}

for(let i = 1 ; i < N ; i++){
    for(let j = 1 ; j < N ; j++){
        dp[i][j] = Math.min(Math.max(dp[i - 1][j], dp[i][j - 1]), num[i][j]);
    }
}

console.log(dp[N-1][N-1])