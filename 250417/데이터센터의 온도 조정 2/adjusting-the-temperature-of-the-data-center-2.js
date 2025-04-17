const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [_, COLD, G, HIGH] = input[0].split(' ').map(Number)

const temperatures = input.slice(1).map(line=>line.split(' ').map(Number))

let minTemp = Number.MAX_SAFE_INTEGER;
let maxTemp = Number.MIN_SAFE_INTEGER;

for([tA, tB] of temperatures){
    minTemp = minTemp > tA ? tA : minTemp;
    maxTemp = maxTemp > tB ? maxTemp : tB;
}

let ans = 0;

for(let temp = minTemp - 1 ; temp <= maxTemp + 1 ; temp++){
    let acc = 0
    for([tA, tB] of temperatures){
        if(temp < tA){
            acc += COLD
        }else if(temp > tB){
            acc += HIGH
        }else{
            acc += G
        }
    }

    ans = ans > acc ? ans :acc
}

console.log(ans)