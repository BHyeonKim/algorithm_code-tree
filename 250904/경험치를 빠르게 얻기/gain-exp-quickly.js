const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number))

const [N, M] = input[0]
const quests = input.slice(1);

const TIME = quests.reduce((acc,val)=>acc+val[1],0);

const dp = Array.from({length:N+1},()=>Array.from({length:TIME+1},()=>0));


dp[0][0] = 0;

for(let i = 1 ; i <= N ; i++){
    const [e, t] = quests[i-1]

    for(let j = 0 ; j <= TIME ; j++){

        if(j >= t){
            dp[i][j] = Math.max(dp[i][j], dp[i-1][j-t] + e)
        }

        dp[i][j] = Math.max(dp[i][j], dp[i-1][j])
    }
}

let ans = Number.POSITIVE_INTERGER

for(let i = 0 ; i <= TIME ; i++){
    if(dp[N][i] >= M){
        ans = i;
        break;
    }
}

if(ans === Number.POSITIVE_INTERGER){
    console.log(-1)
}else{
    console.log(ans)
}