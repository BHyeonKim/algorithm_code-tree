const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

let ans = 0;

for(let i = 0 ; i < binaryStr.length ; i++){
    ans += binaryStr[i] !== '0' ? Math.pow(2, binaryStr.length - i - 1) : 0;
}

console.log(ans)