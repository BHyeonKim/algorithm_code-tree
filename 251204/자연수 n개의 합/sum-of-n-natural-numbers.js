const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const s = BigInt(input[0].trim());

let left = 1n, right = s;
let ans = 0n;

while(left <= right){
    const mid = (left + right) / 2n;
    const acc = mid * (mid + 1n) / 2n;

    if(acc <= s){
        ans = mid; 
        left = mid + 1n;
    }else{
        right = mid - 1n;
    }
}

console.log(ans.toString());