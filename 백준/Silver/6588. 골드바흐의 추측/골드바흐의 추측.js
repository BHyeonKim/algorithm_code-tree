const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const 에라토스테네스의체 = Array(1000000+1).fill(true);

에라토스테네스의체[0] = false;
에라토스테네스의체[1] = false;

for(let i = 2 ; i < 에라토스테네스의체.length ; i++){
  for(let j = 2 ;  i * j < 에라토스테네스의체.length ; j++){
    에라토스테네스의체[i*j] = false;
  }
}

ans = ''

for(const testcase of input){
  if(testcase === 0) break;

  let num = 0

  for(let i = 2 ; i < 에라토스테네스의체.length ; i++){
    if(!에라토스테네스의체[i]) continue;

    if(에라토스테네스의체[testcase-i]){
      num = i;
      break;
    }
  }

  if(num){
    ans += `${testcase} = ${num} + ${testcase-num}\n`
  }else{
    ans += `Goldbach's conjecture is wrong.\n`
  }
}

console.log(ans)