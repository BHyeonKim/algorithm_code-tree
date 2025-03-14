const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

let ans = 1;

let prev = arr[0];
let count = 1;
for(let i = 1 ; i < arr.length ; i++){
    if(prev === arr[i]){
        count++;
    }else{
        prev = arr[i]
        count = 1
    }
    ans = Math.max(ans,count);
}

console.log(ans)