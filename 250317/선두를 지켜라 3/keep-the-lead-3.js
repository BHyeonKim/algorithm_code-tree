const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [N, M] = input[0]

const movementOfA = input.slice(1, N+1);
const movementOfB = input.slice(1+N)

let stageOfA = 0;
let stageOfB = 0;

let timeOfA = 0;
let timeOfB = 0;

let distanceOfA = 0;
let distanceOfB = 0;

let head = -1; // 0 : 동률, 1: 1번 선두, 2: 2번 선두
let ans = 0;

while(true){
  let currentHead = -1

  if(stageOfA < movementOfA.length){

    const [v, t] = movementOfA[stageOfA];

    timeOfA++;
    distanceOfA += v;

    if(timeOfA === t){
      stageOfA++;
      timeOfA = 0;
    }

  }

  if(stageOfB < movementOfB.length){

    const [v, t] = movementOfB[stageOfB];

    timeOfB++;
    distanceOfB += v;

    if(timeOfB === t){
      stageOfB++;
      timeOfB = 0;
    }

  }

  if(distanceOfA > distanceOfB){
    currentHead = 1;
  }else if(distanceOfA < distanceOfB){
    currentHead = 2;
  }else{
    currentHead = 0;
  }

  if(head !== currentHead){
    head = currentHead;
    ans++;
  }

  if(stageOfA === movementOfA.length && stageOfB === movementOfB.length) break;
}

console.log(ans)