const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const lines = input.slice(1).map(line => line.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);

// dp[i] = i번째 선분을 마지막으로 선택했을 때의 최대 선분 개수
const dp = Array(N).fill(0);

for (let i = 0; i < N; i++) {
    dp[i] = 1; // 자기 자신만 선택하는 경우

    for (let j = 0; j < i; j++) {
        // j번째 선분과 i번째 선분이 겹치지 않으면 (끝점 공유도 겹침으로 간주)
        if (lines[j][1] < lines[i][0]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(Math.max(...dp));
