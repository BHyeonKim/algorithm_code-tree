const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0]
const arr = input[1].split(' ').map(Number);

const incrementDpTable = Array(N).fill(1);
const decrementDpTable = Array(N).fill(1);

for(let i = 0 ; i < N ; i++){
    for(let j = 0 ; j < i ; j++){
        if(arr[i] > arr[j]){
            incrementDpTable[i] = Math.max(incrementDpTable[j] + 1, incrementDpTable[i])
        }
    }
}



for(let i = N - 1 ; i >= 0 ; i--){
    for(let j = N - 1 ; j > i ; j--){
         if(arr[i] > arr[j]){
            decrementDpTable[i] = Math.max(decrementDpTable[j] + 1, decrementDpTable[i])
        }
    }
}


let ans = 0;

for(let i = 0 ; i < N ; i++){
    ans = Math.max(ans, incrementDpTable[i]+decrementDpTable[i]-1)
}

console.log(ans)