const fs = require('fs')
const games = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(line=>line.split(' ').map(Number));

const arr = Array(4).fill(0)

let ans = 0;

for(let i = 1 ; i <= 3 ; i++){
    let count = 0

    arr.fill(0)
    arr[i] = 1;

    for(const [a, b, c] of games){
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;

        if(arr[c]) count++
    }

    ans = ans > count ? ans : count
}

console.log(ans)