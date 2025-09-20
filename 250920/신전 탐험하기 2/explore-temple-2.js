const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const N = input[0][0]
const floors = [0, ...input.slice(1)]

const dp = Array.from({length: N+1}, () => Array.from({length: 4}, () => Array.from({length: 4}, () => -1)));

for(let first = 1; first <= 3; first++) {
    dp[1][first][first] = floors[1][first-1];
}


let ans = 0;

for(let i = 2; i <= N; i++) {
    for(let curr = 1; curr <= 3; curr++) { 
        for(let first = 1; first <= 3; first++) { 
            for(let prev = 1; prev <= 3; prev++) { 
                if(dp[i-1][prev][first] === -1) continue;

                if(prev === curr) continue;

                if(i === N && first === curr) continue;

                dp[i][curr][first] = Math.max(dp[i][curr][first], dp[i-1][prev][first] + floors[i][curr-1]);

                ans = Math.max(ans, dp[i][curr][first])
            }
        }
    }
}

console.log(ans)