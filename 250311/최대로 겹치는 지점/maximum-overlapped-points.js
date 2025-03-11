const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

const arr = Array.from({length: 101},()=>0)

for(const[s, e] of segments){
    for(let i = s ; i <= e ; i++){
        arr[i]++;
    }
}

console.log(Math.max(...arr));