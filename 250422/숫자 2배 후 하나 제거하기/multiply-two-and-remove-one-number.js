const fs = require('fs')
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

let ans = Number.MAX_SAFE_INTEGER;

for(let i = 0 ; i < numbers.length ; i++){
    const arr = [...numbers];
    arr[i] = arr[i] * 2;

    for(let j = 0 ; j < numbers.length ; j++){
        if(i === j) continue;

        const arr2 = arr.filter((val,index)=> j!==index )

        let sub = 0;

        for(let k = 0 ; k < arr2.length - 1 ; k++){
            sub += Math.abs(arr2[k] - arr2[k+1])
        }

        ans = ans > sub ? sub : ans
    }
}

console.log(ans)