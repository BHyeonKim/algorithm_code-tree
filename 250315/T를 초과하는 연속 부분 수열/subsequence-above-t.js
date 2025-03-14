const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, T] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);


let ans = 0;
let count = 0;

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] > T){
        count++;
        ans = Math.max(ans, count)
    }else{
        count = 0;
    }
}

console.log(ans);