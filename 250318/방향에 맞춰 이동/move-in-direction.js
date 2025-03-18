const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const moves = input.slice(1).map(line=>line.split(' '));

const ans = [0, 0]

const delta = { W : [-1, 0], S : [0, -1], N : [0, 1], E : [1, 0]}

for(const [d, distance] of moves){
    ans[0] += delta[d][0] * distance
    ans[1] += delta[d][1] * distance
}

console.log(ans.join(' '))