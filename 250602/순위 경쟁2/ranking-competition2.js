const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const changes = input.slice(1).map(line => line.split(" "));

const score = {
    'A' : 0,
    'B' : 0
}

let honor = 'AB'
let ans = 0;

for(const [c, s] of changes){
    score[c] += +s;

    const winner = score['A'] === score['B'] ? 'AB' : score['A'] > score['B'] ? 'A' : 'B'
    if(winner !== honor){
        ans++;
    }

    honor = winner
}

console.log(ans)
