const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const map = input.slice(1).map(line => line.split(' ').map(Number));

const dp = Array.from({length: N}, () =>
    Array.from({length: N}, () =>
        Array.from({length: 101}, () => Array(101).fill(false))
    )
);

dp[0][0][map[0][0]][map[0][0]] = true;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        for (let min = 1; min <= 100; min++) {
            for (let max = min; max <= 100; max++) {
                if (!dp[i][j][min][max]) continue;

                const val = map[i][j];
                const newMin = Math.min(min, val);
                const newMax = Math.max(max, val);

                if (i + 1 < N) {
                    dp[i+1][j][newMin][newMax] = true;
                }

                if (j + 1 < N) {
                    dp[i][j+1][newMin][newMax] = true;
                }
            }
        }
    }
}

let answer = Infinity;
for (let min = 1; min <= 100; min++) {
    for (let max = min; max <= 100; max++) {
        if (dp[N-1][N-1][min][max]) {
            answer = Math.min(answer, max - min);
        }
    }
}
console.log(answer);