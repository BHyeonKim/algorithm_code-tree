const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [a, b] = input[0];
const [c, d] = input[1];

const visited = Array(101).fill(false);

for(let i = a ; i <= b ; i++){
    visited[i] = true;
}

for(let i = c ; i <= d ; i++){
    visited[i] = true;
}

const min = Math.min(a,c);
const max = Math.max(c,d);
let count = 0;

for(let i = min ; i <= max ; i++){
    if(visited[i]) count++
}

console.log(count-1)

