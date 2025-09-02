const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [N, M] = input[0];
const diamonds = input.slice(1);

const dp = Array.from({length: N + 1}, () => Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
    const [weight, value] = diamonds[i - 1];

    for (let w = 0; w <= M; w++) {
        dp[i][w] = dp[i - 1][w];

        if (weight <= w) {
            dp[i][w] = Math.max(dp[i][w], dp[i - 1][w - weight] + value);
        }
    }
}

console.log(dp[N][M]);
