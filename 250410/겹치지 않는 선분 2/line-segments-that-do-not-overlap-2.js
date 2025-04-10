const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const lines = input.slice(1).map(line=>line.split(' ').map(Number));

let ans = 0;

for(let i = 0 ; i < lines.length ; i++){
    let count = 1;

    const leftBound = lines[i][0], rightBound= lines[i][1]

    for(let j = 0 ; j < lines.length ; j++){
        if(i === j) continue;

        const left = lines[j][0], right = lines[j][1];

        if(leftBound <= left && rightBound >= left && leftBound <= right && rightBound >= right) continue;
        if(leftBound >= left && rightBound >= left && leftBound <= right && rightBound <= right) continue;

        count++
    }

    if(count === lines.length) ans++;
}

console.log(ans)