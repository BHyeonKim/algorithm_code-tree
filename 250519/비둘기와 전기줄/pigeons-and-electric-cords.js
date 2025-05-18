const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = +input[0]
const history = input.slice(1).map(line=>line.split(' ').map(Number));

const map = new Map();

let ans = 0;

for(const [number, position] of history){
    if(!map.has(number)){
        map.set(number, position)
        continue;
    }

    const prevPosition = map.get(number);
    if(prevPosition !== position){
        ans++;
        map.set(number,position)
    }
}

console.log(ans)