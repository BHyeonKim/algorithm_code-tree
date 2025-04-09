const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const coordinates = input.slice(1).map(line=>line.split(' ').map(Number));

let ans = 0;

for(let i = 0 ; i < coordinates.length ; i++){
    const centerX = coordinates[i][0]
    const centerY = coordinates[i][1]

    let maxX = 0;
    let maxY = 0;

    for(let j = 0 ; j < coordinates.length ; j++){
        if(i === j) continue;

        const x = coordinates[j][0]
        const y = coordinates[j][1];

        if(x === centerX){
            const calcY = Math.abs(y -centerY)
            maxY = maxY > calcY ? maxY : calcY
        }else if(y === centerY){
            const calcX = Math.abs(x -centerX)
            maxX = maxX > calcX ? maxX : calcX        
        }
    }

    const result = maxX * maxY;

    ans = ans > result ? ans : result
}

console.log(ans)