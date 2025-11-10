const fs = require('fs')

const N = +fs.readFileSync('/dev/stdin').toString().trim()

const 오백엔 = 500;
const 백엔 = 100;
const 오십엔 = 50;
const 십엔 = 10;
const 오엔 = 5;
const 일엔 = 1;

let left = 1000 - N;

let ans = 0;

while(left > 0){
  if(left >= 오백엔){
    left -= 오백엔
  }else if(left >= 백엔){
    left -= 백엔
  }else if(left >= 오십엔){
    left -= 오십엔
  }else if(left >= 십엔){
    left -= 십엔
  }else if(left >= 오엔){
    left -= 오엔
  }else{
    left -= 일엔
  }
  ans += 1;
}

console.log(ans)