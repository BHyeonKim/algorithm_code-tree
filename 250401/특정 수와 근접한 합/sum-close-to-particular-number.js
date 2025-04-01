const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [_, S] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

const TOTAL = numbers.reduce((acc,val)=>acc+val,0)

let closest = Number.MAX_SAFE_INTEGER;

for(let i = 0; i < numbers.length - 1 ; i++){
    for(let j = i+1 ; j < numbers.length ; j++){
        const num = TOTAL - numbers[i] - numbers[j];

        closest = Math.abs(S - num) > Math.abs(S - closest) ? closest : num
    }
}

console.log(Math.abs(S - closest))