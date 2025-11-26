const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n');

let circles = input.slice(0, 4).map(line=>line.split(''))
const K = input[4]
const rotations = input.slice(5).map(line=>line.split(' ').map(Number))

let ans = 0;

for(const [number, direction] of rotations){
  const rotate = Array(4).fill(false)

  rotate[number-1] = direction

  check(number-1, number-1, rotate)


  for(let i = 0 ; i < 4 ; i++){
    if(rotate[i] === 1){
      circles[i] = rotateRight(circles[i])
    }else if(rotate[i] === -1){
      circles[i] = rotateLeft(circles[i])
    }
  }
}

if(circles[0][0] === '1'){
  ans += 1
}

if(circles[1][0] === '1'){
  ans += 2
}

if(circles[2][0] === '1'){
  ans += 4
}

if(circles[3][0] === '1'){
  ans += 8
}

console.log(ans)

function rotateRight(arr){
  const item = arr.pop();

  return [item, ...arr];
}

function rotateLeft(arr){
  const item = arr[0];

  return [...arr.slice(1), item]
}

function check(current, from, rotate){
  if(current < 0 || current >= 4) return;

  const left = current - 1;
  const right = current + 1;

  if(left >= 0 && left !== from && circles[left][2] !== circles[current][6]){
    if(rotate[current] === 1){
      rotate[left] = -1;
    }else{
      rotate[left] = 1;
    }
    check(left, current, rotate)
  }

  if(right < 4 && right !== from && circles[right][6] !== circles[current][2]){
    if(rotate[current] === 1){
      rotate[right] = -1;
    }else{
      rotate[right] = 1;
    }
    check(right, current, rotate)
  }
}