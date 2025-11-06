const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.trim().split(' ').map(Number));

const [N, K] = input[0];
const items = [0, ...input.slice(1)];

const dp = Array.from({length:N+1},()=>Array.from({length:K+1},()=>0));

for(let totalWeight = 1 ; totalWeight <= K ; totalWeight++){
  for(let itemNo = 1 ; itemNo <= N ; itemNo++){
    const [W, V] = items[itemNo];
    dp[itemNo][totalWeight] = dp[itemNo-1][totalWeight]

    if(W <= totalWeight){
      dp[itemNo][totalWeight] = Math.max(dp[itemNo][totalWeight], dp[itemNo-1][totalWeight-W] + V);
    }
  }
}


let ans = 0;

for(let i = 1 ; i <= N ; i++){
  ans = Math.max(ans, dp[i][K])
}

console.log(ans)