const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = +input[0];
const numbers = input[1].trim().split(' ').map(Number);

const buffer = [];

let ans = ''

for(let i = 1 ; i <= N ; i++){
    buffer.push(numbers[i-1])
    if(i % 2 !== 0){
        ans += buffer.sort((a,b)=>a-b)[parseInt(buffer.length/2)] + ' '
    }
}

console.log(ans.trim())