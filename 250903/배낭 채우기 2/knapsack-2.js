const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [N, MAX_WEIGHT] = input[0];
const diamonds = input.slice(1)

const dp = Array(MAX_WEIGHT+1).fill(0);

for(const [weight, value] of diamonds){
    dp[weight] = value;
}

for(let i = 1 ; i <= MAX_WEIGHT ; i++){
    dp[i] = Math.max(dp[i], dp[i-1]);

    for(const [weight, value] of diamonds){
        if(i >= weight){
            dp[i] = Math.max(dp[i], dp[i-weight]+value);
        }
    }
}

console.log(dp[MAX_WEIGHT])