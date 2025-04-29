const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0];
const string = input[1].trim()

let ans = 0;

for(let length = 1 ; length < string.length ; length++){
    for(let index = 0 ; index + length <= string.length ; index++){
        const subStr = string.slice(index, index+length)
        const left = string.slice(0, index+length-1);
        const right = string.slice(index+1)

        if(left.includes(subStr) || right.includes(subStr)){
           break;
        }

        if(index + length === string.length){
            ans = length;
            break;
        }
    }
    if(ans) break;
}

console.log(ans)