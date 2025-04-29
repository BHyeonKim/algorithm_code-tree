const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0];
const string = input[1].trim()

let ans = 0;

for(let i = 1 ; i < string.length ; i++){
    for(let index = 0 ; index + i <= string.length ; index++){
        const subStr = string.slice(index, index+i)
        const left = string.slice(0, index);
        const right = string.slice(index+i)

        if(left.includes(subStr) || right.includes(subStr)){
           break;
        }

        if(index + i === string.length){
            ans = i;
            break;
        }
    }
    if(ans) break;
}

console.log(ans)