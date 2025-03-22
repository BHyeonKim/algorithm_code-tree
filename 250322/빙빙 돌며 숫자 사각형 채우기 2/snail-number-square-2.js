const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const map = Array.from({length:N},()=>Array.from({length:M},()=>0))

const delta = [[1,0],[0,1],[-1,0],[0,-1]]

let direction = 0;


let point = [0,0]

let visit = 1;

while(visit <= N*M){
    const [r,c] = point
    map[r][c] = visit;
    visit++;


    let nr = r+delta[direction][0]
    let nc = c+delta[direction][1]

    if(nr < 0 || nr >= N || nc < 0 || nc >= M || map[nr][nc] > 0 ){
        direction = rotate(direction)
        nr = r + delta[direction][0]
        nc = c + delta[direction][1]
    }


    point = [nr,nc]
}

console.log(map.map(line=>line.join(' ')).join('\n').trim())


function rotate(dir){
    return (dir+1)%4;
}
