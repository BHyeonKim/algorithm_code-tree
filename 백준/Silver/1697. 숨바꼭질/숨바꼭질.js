const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const [N, K] = input

const visited = Array(100001).fill(false);


visited[N] = true;

const queue = [{x:N,time:0}]

while(queue.length){
  const {x, time} = queue.shift();

  if(x === K){
    console.log(time)
    return
  }

  const nexts = [{x:x+1,time:time+1},{x:x-1,time:time+1},{x:x*2,time:time+1}]

  for(const next of nexts){
    if(next.x < 0 || next.x > 100000 || visited[next.x]) continue;

    visited[next.x] = true;
    queue.push(next)
  }
}



