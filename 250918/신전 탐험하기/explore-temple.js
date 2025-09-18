const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.trim().split(' ').map(Number));

const [N] = input[0]
const floors = [0, ...input.slice(1)]

const dp = Array.from({length: N+1},()=>Array.from({length:4},()=>0));



for(let i = 0 ; i < 3 ; i++){
    dp[1][i+1] = floors[1][i];
}

for(let i = 2 ; i <= N ; i++){
    
    dp[i][1] = Math.max(dp[i-1][2],dp[i-1][3]) + floors[i][0]

    dp[i][2] = Math.max(dp[i-1][1],dp[i-1][3]) + floors[i][1]

    dp[i][3] = Math.max(dp[i-1][1],dp[i-1][2]) + floors[i][2]
}

console.log(Math.max(...dp[N]))