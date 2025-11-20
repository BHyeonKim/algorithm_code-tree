const fs = require('fs')

const grid = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.split(' ').map(Number))


let ans = -1
let r = -1
let c = -1

for(let i = 0 ; i < 9 ; i++){
  for(let j = 0 ; j < 9 ; j++){
    if(grid[i][j] > ans){
      ans = grid[i][j]
      r = i;
      c = j
    }
  }
}

console.log(ans + '\n' + (r+1) + ' ' + (c+1))