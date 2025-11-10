const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [R, C] = input[0].trim().split(' ').map(Number)

const WALL = '#'
const SPACE = '.'
const JIHUN = 'J'
const FIRE = 'F'

const map = input.slice(1).map(line=>line.trim().split(''))
const delta = [[-1,0],[0,1],[1,0],[0,-1]];

const positionOfJihun = [];
const positionOfFire = [];

for(let i = 0 ; i < R ; i++){
  for(let j = 0 ; j < C ; j++){
    if(map[i][j] === JIHUN){
      positionOfJihun.push([i,j,0])
    }

    if(map[i][j] === FIRE){
      positionOfFire.push([i,j])
    }
  }
}

let numOfJihun = positionOfJihun.length;
let numOfFire = positionOfFire.length;

let answerExists = false;
let ans = 0;


while(positionOfJihun.length){

  let newJihun = 0;

  while(numOfJihun){

    const [jihunR, jihunC, jihunTime] = positionOfJihun.shift();
    numOfJihun -= 1;
    
    for(const [dr, dc] of delta){
      const nextJihunR = jihunR+dr;
      const nextJihunC = jihunC+dc;
      
      if(nextJihunC < 0 || nextJihunC >= C || nextJihunR < 0 || nextJihunR >= R){
        if(map[jihunR][jihunC] === JIHUN){
          ans = jihunTime+1;
          answerExists = true;
          break;
        }else{
          continue
        }
      }
      
      if(map[nextJihunR][nextJihunC] === WALL || map[nextJihunR][nextJihunC] === FIRE || map[nextJihunR][nextJihunC] === JIHUN) continue;
      
      map[nextJihunR][nextJihunC] = JIHUN;
      positionOfJihun.push([nextJihunR,nextJihunC,jihunTime+1])
      newJihun += 1;
    }
  }

  numOfJihun = newJihun
    
  if(answerExists){
    break;
  }
    
  let newFire = 0;

  while(numOfFire){ 
    const [fireR, fireC] = positionOfFire.shift();
    numOfFire -= 1

    for(const [dr, dc] of delta){
      const nextFireR = fireR+dr;
      const nextFireC = fireC+dc;
      
      if(nextFireC < 0 || nextFireC >= C || nextFireR < 0 || nextFireR >= R) continue;
      if(map[nextFireR][nextFireC] === WALL || map[nextFireR][nextFireC] === FIRE) continue;
      
      map[nextFireR][nextFireC] = FIRE;
      positionOfFire.push([nextFireR,nextFireC])
      newFire++;
    }
  }

  numOfFire = newFire
}


console.log(answerExists ? ans : 'IMPOSSIBLE')