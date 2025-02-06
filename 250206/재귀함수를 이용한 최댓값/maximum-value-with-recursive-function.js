const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ');

console.log(recur(arr.length - 1))

function recur(depth){
    if(depth === 0){
        return arr[depth];
    }

    return arr[depth] > recur(depth - 1) ? arr[depth] : recur(depth - 1);
}