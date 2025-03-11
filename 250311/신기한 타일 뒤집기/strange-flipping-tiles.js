const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(str=>str.split(' '));

const colorArr = Array.from({length: 1000 * 100 * 2}, () => null);

let cursor = 1000 * 100;
let leftBound = Number.POSITIVE_INFINITY;
let rightBound = Number.NEGATIVE_INFINITY;

for(const [v, d] of commands){
  const num = Number(v)

  if(d === 'R'){
    for(let i = cursor ; i < cursor + num ; i++){
      colorArr[i] = 'B'
    }

    cursor += num - 1
    rightBound = Math.max(rightBound, cursor)
  }else{
    for(let i = cursor ; i > cursor - num ; i--){
      colorArr[i] = 'W'
    }

    cursor -= num - 1
    leftBound = Math.min(leftBound, cursor);
  }
}

let white = 0;
let black = 0;

for(let i = leftBound ; i <= rightBound ; i++){
  if(colorArr[i] === 'W') white++;
  else black++;
}

console.log(`${white} ${black}`)