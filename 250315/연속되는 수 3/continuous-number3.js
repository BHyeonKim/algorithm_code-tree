const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

let ans = 1;

let count = 1;
let isPrevPositive = arr[0] > 0;

for(let i = 1 ; i < arr.length ; i++){
    if(isPrevPositive === arr[i] > 0){
        count++
    }else{
        isPrevPositive = !isPrevPositive;
        count = 1;
    }

    ans = Math.max(ans, count)
}

console.log(ans)