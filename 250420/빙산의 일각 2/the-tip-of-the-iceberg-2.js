const fs = require('fs')
const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1)

const MAX = Math.max(...arr);

let ans = 0;

for(let height = 0 ; height <= MAX ; height++){

    let count = 0;

    for(let i = 0 ; i < arr.length ; i++){
        let iceberg = arr[i];

        if(iceberg <= height) continue;

        while(iceberg > height){
            i++;
            iceberg = arr[i];
        }

        count++;
    }

    ans = ans > count ? ans : count;
}

console.log(ans)