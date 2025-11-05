const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.trim().split(' ').map(Number));

const N = input[0][0];
const edgeList = input.slice(1);

const adjacentList = Array.from({length:N+1},()=>[])
const parents = Array(N+1).fill(0);

for(const [start, end] of edgeList){
  adjacentList[start].push(end);
  adjacentList[end].push(start);
}

parents[1] = 1;


const queue = [];
queue.push(1);

while(queue.length){
  const node = queue.shift()

  for(const nextNode of adjacentList[node]){
    if(parents[nextNode]) continue;

    parents[nextNode] = node;
    queue.push(nextNode);
  }
}

console.log(parents.slice(2).join('\n').trim())