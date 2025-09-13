const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const arr = [0, ...input[1].split(' ').map(Number)];

const dp = Array.from({length:N+1},()=>Array.from({length:K+1},()=>Number.NEGATIVE_INFINITY));

let ans = Number.NEGATIVE_INFINITY;

if(arr[1] >=0){
    dp[1][0] = arr[1]
    
}else{
    dp[1][1] = arr[1]
}
ans = Math.max(ans, arr[1])


for(let i = 2 ; i <= N ; i++){
    const num = arr[i];

    if(num < 0){
        dp[i][1] = Math.max(dp[i-1][0] + num, num)
        ans = Math.max(ans, dp[i][1])

        for(let j = 2 ; j <= K ; j++){
            if(dp[i-1][j-1] !== Number.NEGATIVE_INFINITY){
                dp[i][j] = dp[i-1][j-1] + num;
                ans = Math.max(ans, dp[i][j])
            }
        }
    }else{
        dp[i][0] = Math.max(dp[i-1][0]+num, num);
        ans = Math.max(ans, dp[i][0])

        for(let j = 1 ; j <= K ; j++){
            if(dp[i-1][j] !== Number.NEGATIVE_INFINITY){
                dp[i][j] = dp[i-1][j] + num;
                ans = Math.max(ans, dp[i][j])
            }
        }
    }
}

console.log(ans)