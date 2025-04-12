const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

let ans = '';

for(let i = 0 ; i < n ; i++){
    for(let j = 0 ; j < m ; j++){
        ans +='1'
    }

    ans += '\n'
}

console.log(ans.trim())