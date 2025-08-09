const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0]
const arr = input[1].split(' ').map(Number);
arr.unshift(0);

const dp = Array(N+1).fill(1);

for(let i = 1 ; i <= N ; i++){
    let max = 0;

    for(let j = 1 ; j < i ; j++){
        if(arr[j] > arr[i]){
            max = Math.max(dp[j], max);
        }
    }

    dp[i] = max + 1;
}

console.log(Math.max(...dp))
