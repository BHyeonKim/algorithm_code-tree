const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

let ans = '';


while(n !== 0){
    ans = (n % b) + ans;
    n = Math.floor(n / b);
}

console.log(ans)