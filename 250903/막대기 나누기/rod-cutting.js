const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const N = input[0];
const sticks = input[1];

const dp = Array.from({length:sticks.length+1},()=>Array.from({length:N+1},()=>0))

let ans = 0;

for(let i = 1 ; i <= sticks.length ; i++){
    const stick = sticks[i-1];

    for(let length = 1 ; length <= N ; length++){
        dp[i][length] = dp[i-1][length]

        if(length >= i){
            dp[i][length] = Math.max(dp[i][length], dp[i][length-i]+stick)
            ans = Math.max(dp[i][length], ans)
        }
    }
}

console.log(ans)