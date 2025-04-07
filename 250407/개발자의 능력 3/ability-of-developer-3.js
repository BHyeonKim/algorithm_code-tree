const fs = require('fs')

const devs = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const total = devs.reduce((acc,cur)=>acc+cur,0);

let ans = total;

for(let i = 0 ; i < devs.length - 2 ; i++){
    for(let j = i + 1 ; j < devs.length - 1 ; j++){
        for(let k = j + 1 ; k < devs.length ; k ++){
            const sum = devs[i] + devs[j] + devs[k]
            const left = total - sum;

            const diff = Math.abs(left-sum)
            ans = ans > diff ? diff : ans
        }
    }
}

console.log(ans)