const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const combinations = [];

function dfs(start, acc) {
    if (acc.length === M - 1) {
        combinations.push(acc.split('').map(Number));
        return;
    }

    for (let i = start; i < N - 1; i++) {
        dfs(i + 1, acc+String(i));
    }
}

let ans = Number.MAX_SAFE_INTEGER;

dfs(0, '');

for(const split of combinations){

    const maxArr = []

    maxArr.push(arr.slice(0, split[0]+1).reduce((acc,cur)=>acc+=cur,0))

    for(let i = 0 ; i < split.length - 1 ; i++){
        const splitStart = split[i];
        const splitEnd = split[i+1];

        maxArr.push(arr.slice(splitStart+1, splitEnd+1).reduce((acc,cur)=>acc+=cur,0))
    }

    maxArr.push(arr.slice(split[split.length-1]+1).reduce((acc,cur)=>acc+=cur,0))

    const max = Math.max(...maxArr)

    ans = ans > max ? max : ans
}

console.log(ans)

