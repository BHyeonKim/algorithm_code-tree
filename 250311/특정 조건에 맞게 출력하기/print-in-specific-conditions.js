const fs = require('fs')

const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);


const result = []


for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] == 0) break;
    result.push(arr[i])
}

console.log(result.map(val=> val % 2 === 0 ? val / 2 : val + 3).join(' '))
