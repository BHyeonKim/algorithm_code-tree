const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0];
const map = input.slice(1).map(line=>line.split(' ').map(Number));
const dp = Array.from({length:N},()=>Array.from({length:N},()=>({min:0,max:0,sub:0})));

dp[0][0] = {min:map[0][0],max:map[0][0]};


for(let i = 1 ; i < N ; i++){
    dp[i][0] = {min: Math.min(dp[i-1][0].min,map[i][0]), max:Math.max(dp[i-1][0].max,map[i][0])};
}

for(let i = 1 ; i < N ; i++){
    dp[0][i] = {min: Math.min(dp[0][i-1].min,map[0][i]), max:Math.max(dp[0][i-1].max,map[0][i])};
}

for(let i = 1 ; i < N ; i++){
    for(let j = 1 ; j < N ; j++){
        const max1 = Math.max(dp[i-1][j].max, map[i][j]);
        const min1 = Math.min(dp[i-1][j].min, map[i][j]);

        const max2 = Math.max(dp[i][j-1].max, map[i][j]);
        const min2 = Math.min(dp[i][j-1].min, map[i][j]);
        
        if(max1 - min1 >= max2 - min2){
            dp[i][j].max = max2
            dp[i][j].min = min2
        }else{
            dp[i][j].max = max1
            dp[i][j].min = min1
        }
    }
}

console.log(dp[N-1][N-1].max-dp[N-1][N-1].min);