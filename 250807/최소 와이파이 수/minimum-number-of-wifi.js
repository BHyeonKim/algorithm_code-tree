const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const bits = input[1].split(' ').map(Number);

const coverage = M + 2;

let count = 0;
let distance = 0;

let ans = 0;

for(let i = 0 ; i < N ; i++){
    if(count === 0 && bits[i] === 0){
        distance = 0;
        continue;
    }

    distance++;
    count += bits[i];


    if(distance === coverage || count === coverage){
        ans++;

        count = 0;
        distance = 0;
    }
}

console.log(ans)