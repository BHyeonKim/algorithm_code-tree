const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const N = input[0];
const numbers = input[1];

const total = numbers.reduce((acc,val)=>acc+val,0);

const dp = Array.from({length:numbers.length+1},()=>Array.from({length:total+1},()=>false));

dp[0][0] = true;

let ans = Number.POSITIVE_INFINITY;

for(let i = 1 ; i <= N ; i++){

    for(let j = 1 ; j <= total ; j++){
        const number = numbers[i-1];

        if(j >= number && dp[i-1][j-number]){
            dp[i][j] = true
        }

        if(dp[i-1][j]){
            dp[i][j] = true;
        }
    }
}


for(let j = 1 ; j <= total ; j++){
    if(dp[N][j]){
        ans = Math.min(ans, Math.abs(j-(total-j)))
    }
}

console.log(ans)