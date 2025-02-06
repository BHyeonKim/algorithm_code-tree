const fs = require('fs')

const N = +fs.readFileSync(0).toString().trim();

console.log(recur(N,0))


function recur(num, count){
    if(num === 1){
        return count;
    }

    if(num % 2 === 0){
        return recur(num / 2, count + 1);
    }else{
        return recur(parseInt(num / 3), count + 1);
    }
}