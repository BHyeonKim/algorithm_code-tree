const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [N, M] = input[0];
const arr = input[1];

let ans = 0;

const dp = Array.from({length:N+1}, ()=>0)

function initialize() {
    for (let i = 0; i <= M; i++) {
        dp[i] = Number.POSITIVE_INFINITY;
    }

    dp[0] = 0;
}
   
initialize();

for (let i = 0; i < N; i++) {

    for (let j = M; j >= 0; j--) {
        if (j >= arr[i]) {
            dp[j] = Math.min(dp[j], dp[j - arr[i]] + 1);
        }
    }
}


let minLen = dp[M];

if (minLen === Number.POSITIVE_INFINITY) {
    minLen = -1;
}

console.log(minLen);