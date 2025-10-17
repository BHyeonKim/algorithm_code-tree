const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const numArr = input[1].trim().split(' ').map(Number);

const map = new Map();

const arr = []

for(const num of numArr){
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
}


for(const [key, value] of map.entries()){
    if(Array.isArray(arr[value])){
        arr[value].push(key)

        arr[value].sort((a,b)=>b-a)
    }else{
        arr[value] = [key];
    }
}

let ans = ''
let count = 0;

for(let i = arr.length - 1 ; i >= 0 ; i--){
    const subArr = arr[i];

    for(const num of subArr){
        if(count === K)break;

        ans += num + ' '
        count++
    }

    if(count === K)break;
}


console.log(ans.trim())