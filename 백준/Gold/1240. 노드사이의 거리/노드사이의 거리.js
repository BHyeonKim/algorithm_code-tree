const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.trim());

const [N, M] = input[0].split(' ').map(Number);
const info = input.slice(1, N).map(line=>line.split(' ').map(Number));
const queries = input.slice(N).map(line=>line.split(' ').map(Number));;


const map = new Map();

for(const [a, b, dist] of info){
  if(map.has(a)){
    map.get(a).push({next: b, dist:dist})
  }else{
    map.set(a,[{next: b, dist:dist}])
  }

  if(map.has(b)){
    map.get(b).push({next: a, dist:dist})
  }else{
    map.set(b,[{next: a, dist:dist}])
  }
}

let ans = ''

for(const [startNode, targetNode] of queries){

  const visited = Array(N+1).fill(false);

  visited[startNode] = true;
  const distance = dfs(startNode, targetNode, visited, 0)
  visited[startNode] = false;

  ans += distance + '\n';
}

console.log(ans.trim())

function dfs(next,target,visited, dist){
  const adjacentList = map.get(next);

  for(const {next:nextNode, dist:distance} of adjacentList){
    if(nextNode === target){
      return dist+distance;
    }

    if(visited[nextNode]) continue;

    visited[nextNode] = true;
    const result = dfs(nextNode, target, visited, dist+distance);
    if(result) return result
    visited[nextNode] = false;
  }
}