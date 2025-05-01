const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, K] = input[0].split(' ').map(Number)
const numbers = input.slice(1).map(Number)

const vistied = Array(N).fill(false);

let ans = 0;

for(let i = 0 ; i < N ; i++){
    const num = numbers[i]

    const arrR = []
    const arrL = []

    const leftBound = num - K;

    const rightBound = num + K;

    for(let j = 0 ; j < N ; j++){
        const n = numbers[j]

        if(num <= n && n <= rightBound) arrR.push(n);
        if(leftBound <= n && n <= num) arrL.push(n);
    }

    ans = Math.max(ans, arrR.length, arrL.length)
}


console.log(ans)