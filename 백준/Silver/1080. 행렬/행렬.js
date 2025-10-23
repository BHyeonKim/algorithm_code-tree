const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const grid1 = input.slice(1,N+1).map(line=>line.split(''));
const grid2 = input.slice(N+1).map(line=>line.split(''));



let count = 0

for(let r = 0 ; r <= N - 3 ; r++){
  for(let c = 0 ; c <= M - 3 ; c++){
    if(grid1[r][c] !== grid2[r][c]){
      flip(r, c, grid2);
      count++
    }
  }
}


console.log(isIdentical(grid1, grid2) ? count : -1)

function isIdentical(gridA, gridB){
  for(let r = 0 ; r < N ; r++){
    for(let c = 0 ; c < M ; c++){
      if(gridA[r][c] !== gridB[r][c]) return false;
    }
  }

  return true;
}


function flip(startR, startC, grid){
  for(let r = startR ; r < startR + 3 ; r++){
    for(let c = startC ; c < startC + 3 ; c++){
      grid[r][c] = grid[r][c] === '1' ? '0' : '1'
    }
  }
}