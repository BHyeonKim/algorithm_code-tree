const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(line=>line.split(' ').map(Number));

const [_, K] = input[0]
const baskets = input.slice(1).sort((a,b)=>a[1]-b[1]);

const  position = Array.from({length:101},()=>0)

let leftBound = Number.POSITIVE_INFINITY;
let rightBound = Number.NEGATIVE_INFINITY;

let ans = 0;

for(const [numOfCandy, coordinate] of baskets){
    if(!position[coordinate]){
        position[coordinate] = numOfCandy
    }else{
        position[coordinate] += numOfCandy
    }

    rightBound = coordinate > rightBound ? coordinate : rightBound;
    leftBound = coordinate < leftBound ? coordinate : leftBound;
}


for(let center = leftBound + K ; center <= rightBound - K ; center++){
    let sum = 0
    for(let j = center - K; j <= center + K ; j++){
        sum += position[j]
    }
    ans = ans > sum ? ans : sum;
}

console.log(ans)