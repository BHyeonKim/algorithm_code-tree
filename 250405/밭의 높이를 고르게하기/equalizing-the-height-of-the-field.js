const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, T, H] = input[0].split(' ').map(Number);
const heights = input[1].split(' ').map(Number);

let ans = Number.POSITIVE_INFINITY;

for(let i = 0 ; i < N ; i++){
    for(let j = i + T - 1 ; j < N ; j++){
        let price = 0;

        for(let k = i ; k <= j ; k++){
            const height = heights[k]
            if(height === H) continue;
            price += Math.abs(H - height)
        }

        ans = ans > price ? price : ans
    }
}

console.log(ans)