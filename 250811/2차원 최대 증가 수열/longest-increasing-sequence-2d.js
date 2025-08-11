const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const grid = input.slice(1).map(line=>line.split(' ').map(Number));
const dp = Array.from({length: N}, () => Array.from({length:M}, () => 0));

dp[0][0] = 1;


let ans = 0;

for(let r = 0 ; r < N ; r++){
    for(let c = 0 ; c < M ; c++){

        for(let i = 0 ; i < r ; i++){
            for(let j = 0 ; j < c ; j++){
                if(dp[i][j] === 0) continue;

                if(grid[r][c] <= grid[i][j]) continue;

                dp[r][c] = Math.max(dp[r][c], dp[i][j] + 1);

                ans = Math.max(ans,dp[r][c])
            }
        }
    }
}

console.log(ans)