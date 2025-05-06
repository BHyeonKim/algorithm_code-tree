const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number))

const [N, K] = input[0]
const stones = input[1]

let ans = Number.POSITIVE_INFINITY;

for(let distance = 1 ; distance <= K ; distance++){
    dfs(0, distance, 0)
}

function dfs(currentIndex, k , max){
    if(currentIndex > N) return;

    if(currentIndex === N){
        ans = ans > max ? max : ans
    }

    const currentValue = stones[currentIndex];

    for(let i = currentIndex + 1 ; i <= currentIndex + k && i <= N ; i++){
        dfs(i, k, Math.max(max, currentValue))
    }
}

console.log(ans)