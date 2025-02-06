const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = +input[0]
const arrA = input[1].split(' ').map(Number).sorted((a,b)=>a-b)
const arrB = input[2].split(' ').map(Number).sorted((a,b)=>a-b)

let result = 'Yes'

for(let i = 0 ; i < N ; i++){
    if(arrA[i] !== arrB[i]){
        result = 'No'
        break;
    }
}

console.log(result)