const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, NUM_OF_MOVEMNET] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

let ans = 0;

for(let i = 0 ; i < arr.length ; i++){
    dfs(i, 0, 0);
}

function dfs(index ,sum, depth){
    if(depth === NUM_OF_MOVEMNET){
        ans = ans > sum ? ans : sum;
        return;
    }

    const nextIndex = arr[index] - 1;

    dfs(nextIndex, sum + nextIndex + 1, depth+1);
}

console.log(ans)