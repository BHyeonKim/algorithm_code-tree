const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const seats = input[1].split("");

let selectedI = -1;
let selectedJ = -1;

let maxDist = 0;

for(let i = 0 ; i < N - 1 ; i++){
    if(seats[i] === '0') continue;
    
    for(let j = i + 1 ; j < N ; j++){
        if(seats[j] === '0') continue;

        if(j - i > maxDist){
            selectedI = i;
            selectedJ = j;
            maxDist = j - i;
        }
        break;
    }
}

seats[Math.floor((selectedI+selectedJ)/2)] = '1'

let minDist = N
for(let i = 0 ; i < N - 1 ; i++){
    if(seats[i] === '0') continue;
    
    for(let j = i + 1 ; j < N ; j++){
        if(seats[j] === '0') continue;

        if(j - i < minDist){
            minDist = j - i;
        }
        break;
    }
}


console.log(minDist)