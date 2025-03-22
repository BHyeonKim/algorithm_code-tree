const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);


const grid = Array.from({length:n},()=>Array.from({length:m},()=>''))

let charcode = 65;

let delta = [[0,1],[1,0],[0,-1],[-1,0]]
let direction = 0;

let point = [0,0]
let count = 0



while(true){
    const [r, c] = point;
    grid[r][c] = String.fromCharCode(charcode++)
    count++;

    let nr = r + delta[direction][0]
    let nc = c + delta[direction][1]

    if(nr < 0 || nr >= n || nc < 0 || nc >= m || grid[nr][nc]){
        direction = rotate(direction)
        nr = r + delta[direction][0]
        nc = c + delta[direction][1]
    }

    point = [nr,nc]

    if(count === n*m)break;
}

console.log(grid.map(row=>row.join(' ')).join('\n').trim())

function rotate(dir){
    return (dir+1) % 4
}