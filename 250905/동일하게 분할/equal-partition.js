const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const N = input[0];
const arr = input[1];

const TOTAL = arr.reduce((acc,val)=>acc+val,0) / 2;

const dp = Array.from({length:TOTAL+1},()=>false);


dp[0] = true;

for (let i = 0; i < N; i++) {
    const num = arr[i];

    for (let j = TOTAL; j >= num; j--) {
        if (dp[j - num]) {
            dp[j] = true;
        }
    }
}

console.log(dp[TOTAL] ? "Yes" : "No");