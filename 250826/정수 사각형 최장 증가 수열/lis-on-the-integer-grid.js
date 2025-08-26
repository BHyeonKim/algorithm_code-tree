const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0];
const grid = input.slice(1).map(line=>line.split(' ').map(Number));
const memo = Array.from({length:N},()=>Array.from({length:N},()=>0))


const delta = [[0,-1],[0,1],[1,0],[-1,0]]


const recursive = (i, j) =>{
    if(memo[i][j]){
        return memo[i][j]
    }

    let num = 0;

    for(const [dx,dy] of delta){
        const nx = dx+i;
        const ny = dy+j;

        if(nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
        if(grid[nx][ny] >= grid[i][j]) continue;

        num = Math.max(recursive(nx,ny), num);
    }

    memo[i][j] = num + 1;

    return memo[i][j]
}

let ans = 0;

for(let i = 0 ; i < N ; i++){
    for(let j = 0 ; j < N ; j++){
        const result = recursive(i,j);

        ans = Math.max(ans, result);
    }
}

console.log(ans);