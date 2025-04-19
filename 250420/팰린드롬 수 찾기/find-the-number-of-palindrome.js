const fs = require('fs')
const [START, END] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let ans = 0;

for(let num = START ; num <= END ; num++){
    const arr = String(num).split('')
    let isPalendrome = true;

    for(let i = 0 ; i < arr.length / 2 ; i++){
        if(arr[i] !== arr[arr.length - 1 - i]){
            isPalendrome = false;
            break;
        }
    }

    if(isPalendrome) ans++
}

console.log(ans)