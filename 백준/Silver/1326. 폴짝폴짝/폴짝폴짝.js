const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.trim().split(' ').map(Number))

const N = input[0][0]
const stones = input[1]
let [S, D] = input[2]
S = S-1;
D = D-1;
const visited = Array(N).fill(false)


visited[S] = true;
const queue = [{x:S, count:0}];

let ans = -1


while(queue.length){
  const {x, count} = queue.shift();

  if(x === D){
    ans = count
    break
  }

  const num = stones[x];

  let fowardNext = x+num 
  let backwardNext = x-num;

  while( fowardNext < N){
    if(!visited[fowardNext]){
        visited[fowardNext] = true;
        queue.push({x:fowardNext, count: count+1})
    }
    
    fowardNext = fowardNext + num 
  }

   while(backwardNext >= 0){
    if(!visited[backwardNext]){
      visited[backwardNext] = true
      queue.push({x:backwardNext, count: count+1})
    }

    backwardNext = backwardNext - num 
  }
}

console.log(ans)