const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const coordinates = input.slice(1).map(line=>line.split(' ').map(Number));

let ans = Number.POSITIVE_INFINITY;

for(let i = 0 ; i < coordinates.length - 1 ; i++){
    for(let j = i+1 ; j < coordinates.length ; j++){
        const dis = Math.pow(coordinates[i][0] - coordinates[j][0],2) + Math.pow(coordinates[i][1] - coordinates[j][1],2)

        ans = ans > dis ? dis : ans
    }
}

console.log(ans)