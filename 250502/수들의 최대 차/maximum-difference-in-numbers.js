const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, K] = input[0].split(' ')
const numbers = input.slice(1).map(Number)

const vistied = Array(numbers.length).fill(false);

let ans = 0;

for(let index = 0 ; index < numbers.length ; index++){
    vistied[index] = true;
    dfs(index, 0)
    vistied[index] = false;
}


function dfs(i ,currentDepth){

    if(currentDepth > ans){
        ans = currentDepth
    }

    if(currentDepth === numbers.length){
        return;
    }

    const num = numbers[i];


    for(let j = 0 ; j < numbers.length ; j++){
        if(vistied[j]) continue;

        const nextNum = numbers[j]

        if(Math.abs(num - nextNum) > K) continue;

        vistied[j] = true;
        dfs(j, currentDepth+1);
        vistied[j] = false;

    }
}

console.log(ans)