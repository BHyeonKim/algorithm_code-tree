const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const N = input[0];
const arr = [0,...input[1]];

const dp = Array.from({length:4},()=>Array.from({length:N+1},()=>0));

dp[0][0] = 0;
dp[1][0] = 0;
dp[2][0] = 0;
dp[3][0] = 0;

dp[1][1] = arr[1];
dp[0][2] = arr[2];
dp[2][2] = arr[1]+arr[2];

for(let stair = 3 ; stair <= N ; stair++){
    for(let one_step = 0 ; one_step <= 3 ; one_step++){
        const coin = arr[stair]

        if(dp[one_step][stair-2]){
            dp[one_step][stair] = Math.max(dp[one_step][stair],dp[one_step][stair-2]+coin);
        }

        if(one_step > 0 && dp[one_step-1][stair-1]){
            dp[one_step][stair] = Math.max(dp[one_step][stair],dp[one_step-1][stair-1]+coin)
        }
        
    }
}


let ans = 0;
for(let i = 0 ; i <= 3 ; i++){
    ans = Math.max(ans, dp[i][N])
}

console.log(ans)