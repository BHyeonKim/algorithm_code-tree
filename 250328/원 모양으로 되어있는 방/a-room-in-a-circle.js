const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1, N + 1).map(Number);

const TOTAL = arr.reduce((acc,cur)=>acc+cur,0)

let ans = Number.POSITIVE_INFINITY

for(let i = 0 ; i < arr.length ; i++){
    let total = TOTAL;
    let distance = 0;

    let current = i;
    while(0 < total){
        total -= arr[current];

        if(current < N - 1){
            current++;
        }else{
            current = 0;
        }
    
        distance += total;
    }

    ans = Math.min(ans, distance)
}

console.log(ans)