const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = parseInt(input[0]);
const stackA = input[1].split(' ').map(Number);
const stackB = input[2].split(' ').map(Number);

const dp = Array.from({length: N+1}, () => Array(N+1).fill(0));

for (let i = N-1; i >= 0; i--) {
    for (let j = N-1; j >= 0; j--) {
        let maxScore = 0;

        if (stackA[i] > stackB[j]) {
            maxScore = Math.max(maxScore, stackB[j] + dp[i][j+1]);
        } else if (stackA[i] < stackB[j]) {
            maxScore = Math.max(maxScore, dp[i+1][j]);
        } else {
            maxScore = Math.max(maxScore, dp[i+1][j+1]);
        }

        maxScore = Math.max(maxScore, dp[i+1][j+1]);

        dp[i][j] = maxScore;
    }
}

console.log(dp[0][0]);