const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();

const memo = Array(20).fill(0)

memo[1] = 1;
memo[2] = 2;
memo[3] = 5;

function recursive(n){
    if(memo[n]) return memo[n]
    
    let acc = 0;
    for(let i = 1 ; i <= n ; i++){
        if(!memo[i]){
            memo[i] = recursive(i);
        }
        acc += memo[i]
    }

    return acc;
}


console.log(recursive(input))