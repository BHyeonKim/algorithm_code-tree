const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);


let ans = 0;

for(let i = 0 ; i < arr.length - 1 ; i++){
    for(let j = i+1 ; j < arr.length ; j++){
        if(arr[i] + arr[j] === K) ans++
    }
}

console.log(ans);




