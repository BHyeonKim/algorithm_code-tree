const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const string = input[1];

let ans = 0;

for(let i = 0 ; i < string.length - 2 ; i++){
    if(string[i] !== 'C') continue;

    for(let j = i+1 ; j < string.length - 1 ; j++){
        if(string[j] !== 'O') continue;

        for(let k = j+1 ; k < string.length ; k++){
            if(string[k] === 'W') ans++;
        }
    }
}

console.log(ans)
