const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);

const grid = Array.from({length:N+1},()=>Array.from({length:N+1},()=>0))

const CENTER = (N+1)/2
let point = [CENTER,CENTER]

let bound = 1;

const delta = [[0,1],[-1,0],[0,-1],[1,0]]
let direction = 0;

let rotationCount = 0;
let count = 0;

while(true){
    const [r,c] = point;
    count++;
    grid[r][c] = count;

    if(count === N*N)break;

    let nr = r + delta[direction][0];
    let nc = c + delta[direction][1];

    if(nr < CENTER - bound || CENTER + bound < nr || nc < CENTER - bound || CENTER + bound < nc){
        direction = rotate(direction)
        rotationCount++;

        nr = r + delta[direction][0];
        nc = c + delta[direction][1];

        if(rotationCount === 4){
            rotationCount = 0;
            bound++;
        }
    }

    point = [nr, nc]
}

function rotate(dir){
    return (dir+1)%4;
}

console.log(grid.slice(1).map(row=>row.slice(1).join(' ')).join('\n').trim())
