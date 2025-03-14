const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
// Please Write your code here.

let ans = 1;
let count = 1;

let prev = arr[0];

for(let i = 1 ; i < arr.length ; i++){
    if(arr[i] > prev){
        prev = arr[i]
        count++;
    }else{
        prev = arr[i]
        count = 1;
    }

    ans = Math.max(ans, count)
}

console.log(ans)