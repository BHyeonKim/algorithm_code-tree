const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [N, K] = input[0].trim().split(' ').map(Number);
const arr = [0, ...input[1].trim().split(' ').map(Number)];

const sum = Array.from({length: arr.length},()=>0);

for(let i = 1 ; i < N+1 ; i++){
    sum[i] = arr[i] + sum[i-1];
}

let ans = 0;

for(let i = 1 ; i < N+1 ; i++){
    if(sum[i] < K) continue;
    for(let j = 0 ; j < i ; j++){
        if(sum[i] - sum[j] === K) ans++
    }
}

console.log(ans)