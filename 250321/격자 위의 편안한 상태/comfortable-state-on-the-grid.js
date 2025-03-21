const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const targets = input.slice(1).map(line=>line.split(' ').map(Number))

const grid = Array.from({length:N+1},()=>Array.from({length:N+1},()=>false));

const delta = [[0,-1],[1,0],[0,1],[-1,0]]

let ans = ''

for(const [r,c] of targets){
    let count = 0;
    grid[r][c] = true;

    for(let i = 0; i < delta.length ; i++){
        const nc = c + delta[i][0]
        const nr = r + delta[i][1]

        if(nc < 1 || nc > N || nr < 1 || nr > N) continue;

        if(grid[nr][nc]) count++;
    }

    if(count === 3){
        ans += '1\n'
    }else{
        ans += '0\n'
    }
}

console.log(ans.trim())
