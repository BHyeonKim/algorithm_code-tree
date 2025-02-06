const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ');

console.log(recur(arr.length - 1))

function recur(depth){
    if(depth === 0){
        return arr[depth];
    }

    const next = recur(depth - 1)

    return arr[depth] > next ? arr[depth] : next;
}