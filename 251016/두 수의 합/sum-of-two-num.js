const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);


const map = new Map()

let ans = 0;

for(let i = 0 ; i < arr.length ; i++){
    const current = arr[i];
    const target = K - current;
    
    if(map.has(target)){
        ans += map.get(target);
    }


    if(map.has(current)){
        map.set(current, map.get(current) + 1);
    }else{
        map.set(current, 1);
    }
}

console.log(ans);




