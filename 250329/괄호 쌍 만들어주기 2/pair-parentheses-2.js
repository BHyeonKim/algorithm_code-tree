const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('');

let ans = 0;

for(let i = 0 ; i < input.length - 3 ; i++){
    if(input[i] === ')' || input[i+1] === ')') continue;

    for(let j = i + 2 ; j < input.length - 1 ; j++){
        if(input[j] === ')' && input[j+1] === ')') ans++;
    }
}

console.log(ans)