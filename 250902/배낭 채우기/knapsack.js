const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [N, M] = input[0];
const diamonds = input.slice(1);

const wDp = Array.from({length:N},()=>Array.from({length:N},()=>0))
const vDp = Array.from({length:N},()=>Array.from({length:N},()=>0))

let ans = 0;

if(diamonds[0][0] <= M){
    wDp[0][0] = diamonds[0][0]
    vDp[0][0] = diamonds[0][1];
    ans = diamonds[0][1];
}

for(let i = 1 ; i < N ; i++){
    for(let j = 0 ; j <= i ; j++){
        if(wDp[i-1][j] + diamonds[i][0] <= M){
            wDp[i][j] = wDp[i-1][j] + diamonds[i][0]
            vDp[i][j] = vDp[i-1][j] + diamonds[i][1]
            ans = Math.max(ans, vDp[i][j])
        }
    }
}

console.log(ans)
