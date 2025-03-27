const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('').map(Number);

let foundZero = false;

for(let i = 0 ; i < input.length ; i++){
    if(!input[i]){
        foundZero = true;
        input[i] = 1;
        break;
    }
}

if(!foundZero){
    input[input.length-1] = 0;
}

let ans = 0;

for(let i = 0 ; i < input.length ; i++){
    ans += input[i] * Math.pow(2, input.length - i - 1)
}

console.log(ans)