const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const sums = input[1].split(' ').map(Number);

let isIdentical = false;

let ans = ''


for(let num = 1 ; num <= N ; num++){
    let isAnswerable = true;
    let arr = []

    arr.push(num);

    let prev = num;

    for(let i = 0 ; i < sums.length ; i++){
        const sub = sums[i] - prev;

        if(sub < 1){
            isAnswerable = false;
            break;
        }

        arr.push(sub);
        prev = sub;
    }

    if(new Set(arr).size !== arr.length) continue
    if(!isAnswerable) continue

    let adjacent = [];

    for(let i = 0 ; i < arr.length - 1 ; i++){
        adjacent.push(arr[i]+arr[i+1])
    }

    for(let i = 0 ; i < sums.length ; i++){
        if(sums[i] !== adjacent[i]) break;

        if(i === sums.length - 1) isIdentical = true;
    }


    if(isIdentical){
        ans = arr.join(' ')
        break;
    }
}

console.log(ans)