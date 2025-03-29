const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let ans = 0;

for(let i = 0 ; i < arr.length - 2 ; i++){
    for(let j = i + 2 ; j < arr.length ; j++){
        const sum = arr[i] + arr[j]
        ans = ans > sum ? ans : sum
    }
}

console.log(ans)