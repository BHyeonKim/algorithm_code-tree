const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, K, B] = input[0].trim().split(" ").map(Number);
const blankArr = input.slice(1, 1 + B).map(Number);

const broken = Array(N + 1).fill(0);
for (const blank of blankArr) {
    broken[blank] = 1;
}

const prefixSum = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1] + broken[i];
}

let ans = Number.MAX_SAFE_INTEGER;

for (let i = K; i <= N; i++) {
    const brokenCount = prefixSum[i] - prefixSum[i - K];
    ans = Math.min(ans, brokenCount);
}

console.log(ans);