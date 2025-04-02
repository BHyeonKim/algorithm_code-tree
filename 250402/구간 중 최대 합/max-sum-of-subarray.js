const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let sum = arr.slice(0, K).reduce((acc,val)=>acc+val,0)

let ans = sum;

for(let i = K ; i < N ; i++){
    sum -= arr[i-K];
    sum += arr[i];
    ans = ans > sum ? ans : sum
}

console.log(ans)


