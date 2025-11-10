const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.trim().split(' ').map(Number));

const [N, M] = input[0];
const map = input.slice(1)
const dp = Array.from({length:N},()=>Array.from({length:M},()=>0));

dp[0][0] = map[0][0]

for(let r = 1 ; r < N ; r++){
  dp[r][0] = map[r][0] + dp[r-1][0]  
}

for(let c = 1 ; c < M ; c++){
  dp[0][c] = map[0][c] + dp[0][c-1]  
}

for(let r = 1 ; r < N ; r++){
  for(let c = 1 ; c < M ; c++){
    dp[r][c] = Math.max(dp[r-1][c], dp[r][c-1], dp[r-1][c-1]) + map[r][c]
  }
}

console.log(dp[N-1][M-1])