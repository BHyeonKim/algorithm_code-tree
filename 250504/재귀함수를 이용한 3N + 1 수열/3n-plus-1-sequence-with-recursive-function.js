const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString().trim()

let ans = 0;

recursive(input, 0)

console.log(ans)

function recursive(n, count){
    if(n === 1){
        ans = count
        return 1
    }
    else if(n % 2 === 0){
        return recursive(n/2, count+1)
    }else if(n % 2 === 1){
        return recursive(n*3 +1, count+1)
    }
}