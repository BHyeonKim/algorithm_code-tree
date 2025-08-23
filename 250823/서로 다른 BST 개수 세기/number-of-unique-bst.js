const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();

const memo = Array(20).fill(0)

memo[1] = 1;
memo[2] = 2;
memo[3] = 5;

function recursive(n){
    if(memo[n]) return memo[n]
    if(n <= 1){
        return 1
    }

    let acc = 0;
    for(let i = 0 ; i < n ; i++){
        acc += recursive(i) * recursive(n - i - 1);
    }

    memo[n] = acc

    return memo[n];
}


console.log(recursive(input))