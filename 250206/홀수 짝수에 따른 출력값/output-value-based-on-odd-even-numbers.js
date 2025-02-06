const fs = require('fs')

const N = +fs.readFileSync(0).toString().trim();

console.log(recur(N))

function recur(n){
    if(n % 2 === 0){
        if(n === 2){
            return 2
        }else{
            return n + recur(n - 2);
        }
    }else{
        if(n === 1){
            return 1
        }else{
            return n + recur(n - 2);
        }
    }
}