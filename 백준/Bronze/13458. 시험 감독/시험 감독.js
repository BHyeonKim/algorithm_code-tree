const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const classes = input[1].split(' ').map(Number);
const [B, C] = input[2].split(' ').map(Number)

let num = 0n;

for(let people of classes){

  people -= B
  num++;

  if(people > 0){
    num = num + BigInt(Math.ceil(people / C));
  }
}


console.log(num.toString())