const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

const block = Array.from({length:n+1},()=>0);

for(const [s,e] of segments){
    for(let i = s ; i <= e ; i++){
        block[i]++;
    }
}

console.log(Math.max(...block))