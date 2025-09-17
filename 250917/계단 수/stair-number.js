const fs = require("fs");
const N = +fs.readFileSync(0).toString().trim().split('\n');

const dp = Array.from({length:1001},()=>Array.from({length:10},()=>0));

for(let i = 1 ; i <= 9 ; i++){
    dp[1][i] = 1;
}

for(let i = 2 ; i <= N ; i++){
    for(let j = 0 ; j <= 9 ; j++){
        if (j === 0){
            dp[i][j] = dp[i-1][j+1];
        }else if(j === 9){
            dp[i][j] = dp[i-1][j-1];
        }else{
            dp[i][j] = dp[i-1][j+1] + dp[i-1][j-1];
        }
    }
}

console.log(dp[N].reduce((acc,val)=>acc+val,0))