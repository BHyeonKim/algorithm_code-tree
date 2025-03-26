const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map(line => line.trim().split(' ').map(Number));

let ans = 0;

for(let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j + 2 < arr[i].length ; j++){
        let acc = 0;
        for(let k = j ; k <= j + 2 ; k++){
            acc += arr[i][k]
        }
        ans = Math.max(ans, acc)
    }
}

console.log(ans)
