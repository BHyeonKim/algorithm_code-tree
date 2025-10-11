const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const sequence = [0, ...input[1].split(' ').map(Number)];

// 최대 4
const MAX_NUM = 4;

const dp = Array.from({length:N+1},()=>Array.from({length:M+1},()=>Array.from({length:MAX_NUM+1},()=>Number.MIN_SAFE_INTEGER)));


for(let i = 1 ; i <= MAX_NUM ; i++){
    dp[1][0][i] = sequence[1] === i ? 1 : 0;
}

let ans = 0;

for(let i = 2 ; i <= N ; i++){
    for(let j = 0 ; j <= M ; j++){
        for(let k = 1 ; k <= MAX_NUM ; k++){
            for(let l = 1 ; l <= MAX_NUM ; l++){
                if(l === k){
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i-1][j][l] + (sequence[i] === k ? 1 : 0) )
                }

                if(l !== k && j > 0){
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i-1][j-1][l] + (sequence[i] === k ? 1 : 0))
                }
            }
        }
    }
}

for(let j = 0 ; j <= M ; j++){
    for(let k = 1 ; k <= MAX_NUM ; k++){
        ans = Math.max(ans, dp[N][j][k])
    }
}

console.log(ans)
