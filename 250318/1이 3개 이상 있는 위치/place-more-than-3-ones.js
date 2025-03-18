const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

const delta = [[0, -1], [1, 0], [0, 1], [-1, 0]]

let ans = 0;

for(let col = 0 ; col < grid.length; col++){
    for(let row = 0 ; row < grid[0].length ; row++){
        let count = 0;
        for(const [dx, dy] of delta){
            const nx = col + dx;
            const ny = row + dy;
            if(nx < 0 || nx >= grid.length || ny < 0 || ny >= grid[0].length) continue;

            if(grid[nx][ny] === 1) count++;
        }

        if(count >= 3) ans++
    }
}

console.log(ans)