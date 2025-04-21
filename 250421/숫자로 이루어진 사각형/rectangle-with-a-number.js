const fs = require('fs')
const N = +fs.readFileSync('/dev/stdin').toString().trim()


let count = 1;
let num = 1;

let ans = ''

while(count <= N * N){
    ans += num;

    if(count % N){
        ans += ' '
    }else{
        ans += '\n'
    }

    count++;
    num++;

    if(num > 9){
        num = 1;
    }
}

console.log(ans)