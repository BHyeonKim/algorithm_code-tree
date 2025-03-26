const fs = require("fs");
const n = +fs.readFileSync(0).toString().trim();

let ans = '';

for(let i = 0 ; i < n ; i++){
    ans += '12345^&*()_\n'
}

console.log(ans.trim())