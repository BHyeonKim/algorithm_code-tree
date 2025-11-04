const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [N, Q] = input[0];
const edges = input.slice(1, N);
const queries = input.slice(N);

const graph = Array.from({length: N + 1}, () => []);

for(const [start, end, distance] of edges){
  graph[start].push({node: end, usado: distance});
  graph[end].push({node: start, usado: distance});
}

let ans = '';

for(const [K, startNode] of queries){
  const visited = Array(N + 1).fill(false);
  const queue = [{node: startNode, minUsado: Number.MAX_SAFE_INTEGER}];
  visited[startNode] = true;

  let count = 0;
  let idx = 0;
  
  while(idx < queue.length){
    const {node, minUsado} = queue[idx++];

    for(const {node: nextNode, usado} of graph[node]){
      if(visited[nextNode]) continue;

      const newMinUsado = Math.min(minUsado, usado);

      if(newMinUsado >= K){
        count++;
        visited[nextNode] = true;
        queue.push({node: nextNode, minUsado: newMinUsado});
      }
    }
  }

  ans += count + '\n';
}

console.log(ans)