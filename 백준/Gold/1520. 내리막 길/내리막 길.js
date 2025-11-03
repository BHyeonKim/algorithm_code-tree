const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.trim().split(' ').map(Number));

const [M, N] = input[0];
const map = input.slice(1);
const delta = [[0,1],[1,0],[0,-1],[-1,0]];

const memo = Array.from({length:M},()=>Array.from({length:N},()=>-1));

const ans = dfs(0, 0)

console.log(ans);

function dfs(r, c){
  if(r === M - 1 && c === N - 1){
    return 1;
  }
  
  if(memo[r][c] !== -1){
    return memo[r][c];
  }
  
  memo[r][c] = 0;
  
  for(const [dy, dx] of delta){
    const ny = dy + r;
    const nx = dx + c;
    
    if(ny < 0 || ny >= M || nx < 0 || nx >= N){
      continue;
    }
    
    if(map[ny][nx] >= map[r][c]){
      continue;
    }
    
    memo[r][c] += dfs(ny, nx);
  }
  
  return memo[r][c];
}

