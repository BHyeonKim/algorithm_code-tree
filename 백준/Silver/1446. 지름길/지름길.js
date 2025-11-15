const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.trim().split(' ').map(Number));

const [_, D] = input[0]
const roads = input.slice(1)

const dp = Array(D+1).fill(Number.MAX_SAFE_INTEGER);

dp[0] = 0;


for(let i = 0 ; i < D ; i++){
  dp[i+1] = Math.min(dp[i+1], dp[i] + 1)

  for(const [start, end, distance] of roads){
    if(start !== i || end > D) continue;

    dp[end] = Math.min(dp[end], dp[i]+distance)
  }
}


console.log(dp[D])