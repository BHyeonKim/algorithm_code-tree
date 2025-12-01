const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

const arr = input.slice(1)

const stack = []

let num = 1;
let ans = ''

for(const query of arr){
  while(num <= query){
    stack.push(num)
    num++;
    ans += '+' + '\n'
  }

  if(stack[stack.length-1] === query){
    stack.pop()
    ans += '-' + '\n'
  } else {
    console.log('NO')
    return
  }
}

console.log(ans.trim())