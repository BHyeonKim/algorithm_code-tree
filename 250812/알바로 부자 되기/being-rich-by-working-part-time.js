const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const albas = input.slice(1).map(line=>line.split(' ').map(Number)).sort((a,b)=>a[0]-b[0]);

const dp = Array(N).fill(0)

dp[0] = albas[0][2];

for(let i = 0 ; i < N ; i++){
    dp[i] = albas[i][2]

    for(let j = 0 ; j < i ; j++){
        if(albas[j][1] < albas[i][0]){
            dp[i] = Math.max(dp[i], dp[j]+albas[i][2])
        }
    }
}

console.log(Math.max(...dp))