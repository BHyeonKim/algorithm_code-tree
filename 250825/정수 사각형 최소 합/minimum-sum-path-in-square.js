const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0]
const grid = input.slice(1).map(line=>line.split(' ').map(Number));
const dp = Array.from({length:N},()=>Array.from({length:N},()=>0));

dp[0][N-1] = grid[0][N-1]

for(let i = 1 ; i < N ; i++){
    dp[i][N-1] = dp[i-1][N-1] + grid[i][N-1]
}

for(let j = N - 2 ; j >= 0 ; j--){
    dp[0][j] = dp[0][j+1] + grid[0][j]
}

for(let i = 1 ; i < N ; i++){
    for(let j = N - 2 ; j >= 0 ; j--){
        dp[i][j] = Math.min(dp[i-1][j],dp[i][j+1]) + grid[i][j]
    }
}

console.log(dp[N-1][0])