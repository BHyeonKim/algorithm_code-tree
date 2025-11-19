const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const queries = input.slice(1);


const prime = Array(10001).fill(true)

prime[0] = false;
prime[1] = false;

for(let i = 2 ; i <= Math.sqrt(10000) ; i++){
  for(let j = 2 ; i * j <= 10000 ; j++){
    prime[i*j] = false;
  }
}

let ans = ''

for(const query of queries){
  let left = Math.floor(query / 2)
  let right = Math.ceil(query / 2)

  for(let i = 0 ; left - i >= 2 ; i++){
    if(prime[left-i] && prime[right+i]){
      ans += `${left-i} ${right+i}\n`
      break;
    }
  }
}

console.log(ans.trim())