const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

let ans = 0;

for(let i = 1; i < arr.length -2 ; i++){
    for(let j = 0 ; j < i ; j++){
        for(let k = i + 1 ; k < arr.length - 1 ; k++){
            if(arr[j] <= arr[i] && arr[i] <= arr[k]) ans++;
        }
    }
}

console.log(ans)
