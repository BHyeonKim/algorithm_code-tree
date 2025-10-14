const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const queries = input[2].split(' ').map(Number);

const map = new Map();


for(const num of arr){
    const count = map.get(num);

    if(count){
        map.set(num, count+1);
    }else{
        map.set(num, 1);
    }
}


let ans = '';

for(const num of queries){
    const count = map.get(num) ?? 0;

    ans += count + ' '
}

console.log(ans.trim())