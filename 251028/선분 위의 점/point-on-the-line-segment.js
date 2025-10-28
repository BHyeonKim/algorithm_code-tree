const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const points = input[1].split(' ').map(Number);
const lines = input.slice(2).map(line => line.split(' ').map(Number));


let ans = ''

for(const [start, end] of lines){
    let count = 0;

    for(const point of points){
        if(start <= point && point <= end){
            count++
        }
    }

    ans += count + '\n'
}

console.log(ans)