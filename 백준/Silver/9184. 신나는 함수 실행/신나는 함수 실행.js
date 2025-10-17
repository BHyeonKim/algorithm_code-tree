const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const OFFSET = 50;
const NEG = Number.MIN_SAFE_INTEGER;

const memo = Array.from({length:101},()=>Array.from({length:101},()=>Array.from({length:101},()=> NEG)))

let ans = ''
for(const arr of input){
  const [a, b, c] = arr;

  if(a === -1 && b === -1 && c === -1) break;

  const result = solution(arr);

  ans += `w(${a}, ${b}, ${c}) = ${result}\n`
}


console.log(ans.trim());



function solution(arr){
  const [a, b, c] = arr;

  if(memo[a+OFFSET][b+OFFSET][c+OFFSET] !== NEG){
    return memo[a+OFFSET][b+OFFSET][c+OFFSET]
  }

  if(a <= 0 || b <= 0 || c <= 0){
    return 1;
  }

  if(a > 20 || b > 20 || c > 20){
    const result = solution([20, 20, 20]);

    memo[a+OFFSET][b+OFFSET][c+OFFSET] = result

    return result;
  }

  if(a < b && b < c){
    const result = solution([a, b, c-1]) + solution([a, b-1, c-1]) - solution([a, b-1, c]);

    memo[a+OFFSET][b+OFFSET][c+OFFSET] = result

    return result;
  }

  const result = solution([a-1, b, c]) + solution([a-1, b-1, c]) + solution([a-1, b, c-1]) - solution([a-1, b-1, c-1]);

  memo[a+OFFSET][b+OFFSET][c+OFFSET] = result

  return result
}