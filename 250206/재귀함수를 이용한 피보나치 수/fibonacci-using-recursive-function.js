const fs = require('fs')

const input = +fs.readFileSync(0).toString().trim()

console.log(fibo(input))

function fibo(num){

    if(num === 1) return 1;

    if(num === 2) return 1;

    return fibo(num-1) + fibo(num-2);
}