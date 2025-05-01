const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number))

const map = new Map();

for(const arr of input){
    const key = arr.sort((a,b)=>a-b).join('')

    if(map.has(key)){
        const count = map.get(key)
        map.set(key, count+1)
    }else{
        map.set(key,1)
    }
}

let ans = 0;

for(const value of map.values()){
    ans = ans > value ? ans : value
}

console.log(ans)