const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const MAX = 100

const N = +input[0];
const map = input.slice(1).map(line=>line.split(' ').map(Number));
const dp = Array.from({length:N},()=>Array.from({length:N},()=>MAX));

let ans = 100;

function initDpTable(){

    for(let i = 0 ; i < N ; i++){
        for(let j = 0 ; j < N ; j++){
            dp[i][j] = MAX;
        }
    }

    dp[0][0] = map[0][0];

    for(let i = 1 ; i < N ; i++){
        dp[i][0] = Math.max(dp[i-1][0], map[i][0]);
    }

    for(let i = 1 ; i < N ; i++){
        dp[0][i] = Math.max(dp[0][i-1], map[0][i]);
    }
}


function explore(low){
    for(let i = 0 ; i < N ; i++){
        for(let j = 0 ; j < N ; j++){
            if(map[i][j] < low){
                map[i][j] = MAX;
            }
        }
    }

    initDpTable();

    for (let i = 1; i < N; i++) {
        for (let j = 1; j < N; j++) {
            dp[i][j] = Math.max(Math.min(dp[i - 1][j], dp[i][j - 1]), map[i][j]);
        }
    }

    return dp[N - 1][N - 1];
}

for(let low = 1 ; low <= MAX ; low++){
    const high = explore(low);

    if(high === MAX) continue;

    ans = Math.min(ans, high - low)
}

console.log(ans);