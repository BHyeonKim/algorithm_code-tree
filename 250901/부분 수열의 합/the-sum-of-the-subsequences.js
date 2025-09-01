const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [N, M] = input[0];
const arr = input[1];

const dp = Array(M + 1).fill(false);
dp[0] = true;

for (let i = 0; i < N; i++) {
    const num = arr[i];

    for (let j = M; j >= num; j--) {
        if (dp[j - num]) {
            dp[j] = true;
        }
    }
}

console.log(dp[M] ? 'Yes' : 'No');