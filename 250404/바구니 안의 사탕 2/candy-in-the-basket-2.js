const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(line=>line.split(' ').map(Number));

const [_, K] = input[0]
const baskets = input.slice(1).sort((a,b)=>a[1]-b[1]);

const  position = Array.from({length:101},()=>0)

let ans = 0;

for(const [numOfCandy, coordinate] of baskets){
    if(!position[coordinate]){
        position[coordinate] = numOfCandy
    }else{
        position[coordinate] += numOfCandy
    }
}

for(let center = 1 ; center <= 99 ; center++){
    let sum = 0
    for(let j = center - K; j <= center + K ; j++){
        if(j < 0 || j > 100) continue;
        sum += position[j]
    }
    ans = ans > sum ? ans : sum;
}

console.log(ans)