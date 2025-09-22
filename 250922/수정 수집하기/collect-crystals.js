const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const str = ' '+input[1];

const dp = Array.from({length:N+1},()=>Array.from({length:3},()=>Array.from({length:K+1},()=>0)))


const L = 1;
const R = 2;

const direction = [L, R]

if(str[1] === 'L'){
    dp[1][L][0] = 1;
}else if(str[1] === 'R'){
    dp[1][R][1] = 1;
}

let ans = 0;

for(let i = 2 ; i < str.length ; i++){
    for(const d of direction){
        const oposite = d === 1 ? 2 : 1;
        const direction = d === 1 ? 'L' : 'R';
        const point = str[i] === direction ? 1 : 0;

        dp[i][d][0] = point + dp[i-1][d][0]

        for(let k = 1 ; k <= K ; k++){
            dp[i][d][k] = Math.max(dp[i][d][k], dp[i-1][oposite][k-1]) + point
        }
    }
}

console.log(Math.max(...dp[N][R],...dp[N][L]))
