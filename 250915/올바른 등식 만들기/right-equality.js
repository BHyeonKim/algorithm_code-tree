const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [N, M] = input[0]
const arr = input[1];

const OFFSET = 20;

const NEG = -1;
const POS = 1;


const dpLen = OFFSET*2+1
let dp = Array.from({length: dpLen},()=>0)

dp[arr[0]+OFFSET] = 1;
dp[arr[0]*(-1)+OFFSET] = 1;


for(let i = 1; i < N; i++){
    const num = arr[i];
    const newDp = Array.from({length: dpLen}, () => 0);

    for(let j = 0; j < dpLen; j++){
        if(!dp[j]) continue;

        const positive = j + num;
        if(positive < dpLen){
            newDp[positive] += dp[j];
        }

        const negative = j - num;
        if(negative >= 0){
            newDp[negative] += dp[j];
        }
    }

    dp = newDp;
}

console.log(dp[OFFSET + M]);