const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>Number(line.trim()))

const testcases = input.slice(1);


const QUERTER = 25;
const DIME = 10;
const NICKEL = 5;
const PENNY = 1;

let result = ''

for(let left of testcases){

  let numOfQuerter = 0;
  let numOfDime = 0;
  let numOfNickel = 0;
  let numOfPenny = 0;

  while(left > 0){
    if(left >= QUERTER){
      left -= QUERTER
      numOfQuerter++
      continue;
    }

    if(left >= DIME){
      left -= DIME
      numOfDime++
      continue;
    }

    if(left >= NICKEL){
      left -= NICKEL
      numOfNickel++
      continue;
    }

    if(left >= PENNY){
      left -= PENNY
      numOfPenny++
      continue;
    }
  }

  result += `${numOfQuerter} ${numOfDime} ${numOfNickel} ${numOfPenny}\n`
}

console.log(result.trim());
