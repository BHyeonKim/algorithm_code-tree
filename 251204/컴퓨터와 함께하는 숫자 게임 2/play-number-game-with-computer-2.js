const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const M = BigInt(input[0]);
const [a, b] = input[1].split(' ').map(BigInt);

let min = +Infinity;
let max = -Infinity;

for(let target = a ; target <= b ; target++){
    let left = 1n; right = M;

    let count = 0;

    while(left <= right){
        const mid = (left+right)/2n;
        count += 1;

        if(mid === target){
            min = Math.min(min, count);
            max = Math.max(max, count);
            break;
        }

        if(mid > target){
            right = mid - 1n;
        }else if(mid < target){
            left = mid + 1n;
        }
    }
}

console.log(min+' '+max)