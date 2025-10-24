const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const arr = [0, ...input[1].split(" ").map(Number)];

const sum = Array.from({length:arr.length},()=>0);

for(let i = 1 ; i < arr.length ; i++){
    sum[i] = arr[i] + sum[i-1];
}

let start = 0;
let end = 1;

let ans = 0;

while(end < arr.length){
    const value = sum[end] - sum[start];

    if(value === M){
        ans++;
        start++;
        end++;
    }else if(value > M){
        start++;
    }else{
        end++;
    }

}


console.log(ans)