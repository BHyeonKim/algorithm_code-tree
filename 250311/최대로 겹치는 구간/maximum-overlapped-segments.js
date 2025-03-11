const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

let start = 0;
let end = 0;

let ans = 0;

const arr = Array.from({length: 101}, () => 0);

for(const [s, e] of segments){
    for(let i = s ; i < e; i++){
        arr[i]++;
    }
    start = Math.max(start, s)
    end = Math.max(end, e);
}


console.log(Math.max(...arr))