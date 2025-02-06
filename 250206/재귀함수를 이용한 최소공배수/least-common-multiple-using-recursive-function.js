const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);

console.log(recur(1,0))

function recur(acc ,depth){
    if(depth === arr.length - 1){
        const current = arr[depth]
        if(acc % current === 0) return acc;
        else return acc * current;
    }

    const current = arr[depth];

    if(acc % current === 0){
        return recur(acc, depth + 1);
    }else{
        return recur(acc * current, depth + 1);
    }
}