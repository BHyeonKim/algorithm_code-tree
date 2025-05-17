const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.trim().split(' ').map(Number));

const N = input[0][0];
const  arr = input.slice(1)

const visit = Array(100).fill(0);


for(const [start, end] of arr){
    for(let i = start - 1 ; i < end ; i++){
        visit[i]++
    }
}
let isExists = false;

for(let i = 0 ; i < 100 ; i++){
    if(visit[i] === N){
        isExists = true;
        break;
    }
}

console.log(isExists ? 'Yes' : 'No')