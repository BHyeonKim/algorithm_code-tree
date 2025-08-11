const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];

const lines = input.slice(1).map(line=>line.split(' ').map(Number)).sort((a,b)=>a[0]-b[0]);

// dp = 겹치지 않게 가장 많은 수의 선분을 고른 횟수를 저장하는 테이블
// dp[0][x] 해당 선을 포함할경우, dp[1][x] 해당 선을 포함하지 않을 경우
const dp = Array.from({length:2},()=>Array.from({length:N},()=>0));


dp[0][0] = 1;
dp[1][0] = 0;

let prevEnd = lines[0][1];

for(let i = 1 ; i < N ; i++){
    const currentStart = lines[i][0];

    if(currentStart > prevEnd){
        dp[0][i] = Math.max(dp[0][i-1], dp[1][i-1]) + 1;
    }else{
        dp[0][i] = dp[1][i-1] + 1;
    }

    dp[1][i] = Math.max(dp[0][i-1], dp[1][i-1]);

    prevEnd = lines[i][1];
}

console.log(Math.max(dp[1][N-1],dp[0][N-1]))