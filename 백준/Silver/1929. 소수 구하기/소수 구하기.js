const fs = require('fs')
const [M, N] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const prime = Array(N+1).fill(true);

prime[0] = false;
prime[1] = false;

for(let i = 2 ; i <= Math.sqrt(N) ; i++){
  for(let j = 2 ; i * j <= N ; j++){
    prime[i*j] = false;
  }
}


let ans = ''

for(let i = M ; i <= N ; i++){
  if(prime[i]){
    ans += i + '\n'
  }
}

console.log(ans.trim())