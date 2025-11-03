const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.trim());

const [N, M] = input[0].split(" ").map(Number);

const strings = input.slice(1, N+1);
const querys = input.slice(N+1)

const set = new Set(strings);

let ans = 0;

for(const string of querys){
  if(set.has(string)) ans++;
}

console.log(ans)