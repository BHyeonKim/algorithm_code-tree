const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map(line=>line.split(' ').map(Number))


let result = Number.POSITIVE_INFINITY;
let prev = arr[0]

for(let i = 1; i < arr.length - 1 ; i++){
    let distance = 0;
    for(let j = 0 ; j < arr.length ; j++){
        if(j === i) continue;
        distance += Math.abs(prev[0] - arr[j][0]) + Math.abs(prev[1] - arr[j][1])
        prev = arr[j]
    }
    result = Math.min(result, distance)
}

console.log(result)