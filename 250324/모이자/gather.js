const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let ans = Number.POSITIVE_INFINITY;

for (let i = 0 ; i < n ; i++){
    let acc = 0;

    for(let j = 0 ; j < n ; j++){
        acc += arr[j] * Math.abs(j-i)
    }

    ans = Math.min(ans,acc)
}

console.log(ans)