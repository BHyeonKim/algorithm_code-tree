const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0]
const arr = input[1].split('').map(Number);

let ans = 0;

for(let i = 0 ; i < N ; i++){
    if(arr[i]) continue;

    arr[i] = 1;

    for(let j = 0 ; j < N ; j++){
        if(arr[j]) continue;

        let distance = 100;
        let prev = -1;
        arr[j] = 1;

        for(let k = 0 ; k < N ; k++){
            if(prev === -1 && arr[k]){
                prev = k;
                continue;
            }

            if(arr[k]){
                distance = Math.min(distance, k - prev);
                prev = k;
            }
        }

        ans = Math.max(ans, distance)        

        arr[j] = 0
    }

    arr[i] = 0;
}

console.log(ans)