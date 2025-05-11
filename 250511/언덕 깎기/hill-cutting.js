const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const hills = input.slice(1)

let ans = Number.MAX_SAFE_INTEGER;

for(let base = 0 ; base <= 83 ; base++){
    const top = base + 17;

    let acc = 0;
    
    for(const hill of hills){
        let xSquare = 0;

        if(hill < base){
            xSquare += Math.pow(hill-base,2)
        }else if(hill > top){
            xSquare += Math.pow(hill-top,2)
        }

        acc += xSquare

        if(acc > ans) break;
    }

    ans = ans > acc ? acc : ans
}

console.log(ans)