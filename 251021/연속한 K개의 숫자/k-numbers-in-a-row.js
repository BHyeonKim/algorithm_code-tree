const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, K, B] = input[0].trim().split(" ").map(Number);
const blankArr = input.slice(1, 1 + B).map(Number);

const arr = Array(N+1).fill(0);

for(let i = 0 ; i < N+1 ; i++){
    arr[i] = i;
}

for(const blank of blankArr){
    arr[blank] = 0;
}

const sum = Array.from({length:N+1},()=>0);

for(let i = 1 ; i < N+1 ; i++){
    sum[i] = arr[i] + sum[i-1];
}



let ans = Number.MAX_SAFE_INTEGER

for(let i = N ; i >= 0 ; i--){
    let blank = 0;
    let prev = sum[i]

    for(let j = i + 1 ; j >= 0 ; j--){
        const count = (i - j) + 1;

        if(prev === sum[j]) blank++

        if(count === K){ 
            ans = Math.min(ans, blank)
            break;
        }

        prev = sum[j]
    }
}

console.log(ans)