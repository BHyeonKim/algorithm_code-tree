const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = +input[0]
const arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);

let ans = -1000;

if(arr[0] < 0 && arr[1] < 0){
    ans = Math.max(arr[0]*arr[1]*arr[N-1])
}

ans = Math.max(ans, arr[N-1]*arr[N-2]*arr[N-3]);

console.log(ans)

