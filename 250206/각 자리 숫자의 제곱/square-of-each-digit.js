const fs = require('fs')

const input = fs.readFileSync(0).toString().trim()

console.log(recur(0))

function recur(depth){
    if(depth === input.length){
        return Math.pow(input[input.length-1],2)
    }

    return Math.pow(input[depth],2) + recur(depth+1);
}