const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

const colorArr = Array.from({length: 2 * 1000 * 100}, () => null);
const whiteArr = Array.from({length: 2 * 1000 * 100}, () => 0);
const blackArr = Array.from({length: 2 * 1000 * 100}, () => 0);

let cursor = 1000 * 100;


for(const [val, dir] of commands){
  const num = Number(val);

  if(dir === 'R'){
    for(let i = cursor ; i < cursor + num ; i++){
      if(colorArr[i] === 'gray') continue;
      colorArr[i] = 'black'
      blackArr[i]++

      if(whiteArr[i] >= 2 && blackArr[i] >= 2) colorArr[i] = 'gray'
    }

    cursor += num - 1
  }else{
    for(let i = cursor ; i > cursor - num ; i--){
      if(colorArr[i] === 'gray') continue;
      colorArr[i] = 'white'
      whiteArr[i]++;

      if(whiteArr[i] >= 2 && blackArr[i] >= 2) colorArr[i] = 'gray'
    }

    cursor -= (num - 1)
  }
}

let white = 0;
let black = 0;
let gray = 0;

for(let i = 0 ; i < colorArr.length ; i++){
  switch(colorArr[i]){
    case 'white':
      white++;
      break;
    case 'black':
      black++;
      break;
    case 'gray':
      gray++;
      break;
  }
}

console.log(`${white} ${black} ${gray}`)