const fs = require('fs')

const N = +fs.readFileSync(0).toString().trim()

console.log(recur(N))

function recur(num){
    if(num === 1)return 1;
    if(num === 2)return 2;

    return recur(parseInt(num / 3)) + recur(num - 1);
}