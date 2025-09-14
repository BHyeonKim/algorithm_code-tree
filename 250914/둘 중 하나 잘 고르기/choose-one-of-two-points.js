const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const N = input[0]
const cards = [[], ...input.slice(1)]

const NEG = -Infinity

const BLUE = 0
const RED = 1

const dp = Array.from({length:N+1},()=>Array.from({length:N+1},()=>NEG));

dp[0][0] = 0


for(let blue = 0 ; blue <= N ; blue++){
    for(let red = 0 ; red <= N ; red++){
        if(blue === 0 && red === 0) continue;

        const turn = blue + red;

        if(blue > 0 && dp[blue-1][red] !== -Infinity){
            dp[blue][red] = Math.max(dp[blue][red], dp[blue-1][red] + cards[turn][BLUE]);
        }

        if(red > 0 && dp[blue][red-1] !== -Infinity){
            dp[blue][red] = Math.max(dp[blue][red], dp[blue][red-1] + cards[turn][RED]);
        }
    }
}

console.log(dp[N][N])