const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split('');


let count = 0;


for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] === ')') continue;

    for(let j = i+1 ; j < arr.length ; j++){
        if(arr[j] === ')') count++;
        else continue;
    }
}

console.log(count)
