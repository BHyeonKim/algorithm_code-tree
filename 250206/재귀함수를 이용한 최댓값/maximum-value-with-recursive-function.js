const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ');

console.log(recur(0, arr.length - 1))

function recur(prev ,depth){
    if(depth === 0){
        return prev > arr[depth] ? prev : arr[depth];
    }

    const current = arr[depth];
    const next = recur(current, depth - 1);

    return current > next ? current : next;
}