const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const seats = input[1].split('');

let ans = 0;

for(let i = 0 ; i < N ; i++){
    if(seats[i] === '1') continue;
    seats[i] = '1'
    ans = Math.max(ans, findMinDist(seats));
    seats[i] = '0'
}

console.log(ans)

function findMinDist(arr){

    let dist = 1000;

    for(let i = 0 ; i < arr.length - 1 ; i++){
        if(arr[i] === '0') continue;
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[j] === '0') continue;

            dist = Math.min(dist,j - i)
            break;
        }
    }

    return dist;
}