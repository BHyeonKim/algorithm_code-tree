const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [N, M] = input[0];
const arr = input[1].sort((a, b) => a - b);

const visited = Array(N).fill(false);


const set = new Set()

for(let i = 0 ; i < N ; i++){
  visited[i] = true;
  dfs(i, [])
  visited[i] = false;
}

let ans = []

for(const value of set.values()){
  ans.push(value)
}


console.log(ans.join('\n').trim())

function dfs(index, items){
  const newItems = [...items, arr[index]]

  if(newItems.length === M){
    const string = newItems.join(' ')
    if(!set.has(string)){
      set.add(string)
    }
    return;
  }

  for(let nextIndex = 0 ; nextIndex < N ; nextIndex++){
    if(visited[nextIndex]) continue;

    visited[nextIndex] = true;
    dfs(nextIndex, newItems)
    visited[nextIndex] = false;
  }
}