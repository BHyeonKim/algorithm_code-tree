const fs = require('fs')

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number).sort((a,b)=>b-a)

let MAX = arr[0]

let ans = 0;

for(let num = MAX ; num >= 1 ; num--){
    let count = 0;

    for(let i = 0 ; i < arr.length - 1 ; i++){    
        const sub = arr[i] - num;
        
        for(let j = i + 1 ; j < arr.length ; j++){
            if(sub === num - arr[j]){
                count++;
                break;
            }
        }
    }

    ans = ans > count ? ans : count
}

console.log(ans)
