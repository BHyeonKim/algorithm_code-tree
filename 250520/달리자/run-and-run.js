const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = +input[0]
const arrA = input[1].split(' ').map(Number);
const arrB = input[2].split(' ').map(Number);


let ans = 0;


for(let i = 0 ; i < N - 1 ; i++){
    if(arrA[i] > arrB[i]){
        const sub = arrA[i] - arrB[i];
        
        arrA[i+1] += sub;
        ans += sub;
    }
}

console.log(ans)