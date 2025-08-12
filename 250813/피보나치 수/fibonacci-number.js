const fs = require('fs')
const N = +fs.readFileSync('/dev/stdin').toString().trim()

//BOTTOM UP 방식
const dp = Array(46).fill(0)

dp[1] = 1;
dp[2] = 1;

for(let i = 3 ; i <= N ; i++){
    dp[i] = dp[i-1] + dp[i-2];
}

console.log(dp[N]);

//TOP DOWN 방식
// const memo = Array(46).fill(0);

// function fibo(n){
//     if(n === 1 || n === 2) return 1;

//     if(memo[n]) return memo[n]

//     memo[n] = fibo(n-1) + fibo(n-2);

//     return memo[n]
// }

// console.log(fibo(N))