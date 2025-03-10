const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let ans = '';

while(n !== 0){
    ans = n % 2 + ans;
    n = parseInt(n / 2);
}

console.log(ans);



