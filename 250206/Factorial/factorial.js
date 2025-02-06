const fs = require('fs')

const input = +fs.readFileSync(0).toString().trim();

console.log(factorial(input))

function factorial(n){
    if(n === 1 || n === 0) return 1;

    return n * factorial(n-1);
}