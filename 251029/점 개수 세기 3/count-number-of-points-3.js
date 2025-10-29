const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, Q] = input[0].trim().split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number).sort((a,b)=>a-b);
const queries = input.slice(2, 2 + Q).map(line => line.trim().split(' ').map(Number));

const map = new Map();

let idx = 1;

for(const num of arr){
    map.set(num, idx++);
}

let ans = ''

for(const [start, end] of queries){
    ans += (map.get(end) - map.get(start)) + 1 + '\n'
}

console.log(ans.trim())