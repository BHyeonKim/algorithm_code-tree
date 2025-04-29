const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const STRING = input[1].trim().split('').map(Number)

let ans = 0;

for(let i = 0 ; i < STRING.length ; i++){
    if(STRING[i]) continue;

    STRING[i] = 1;

    let left = 0;
    let right = 1;

    let distance = 20;

    while(right < STRING.length){
        if(!STRING[left]){
            left++;
            right++;
        }else if(!STRING[right]){
            right++;
        }else if(STRING[left] && STRING[right] && left < right){
            distance = Math.min(distance, right-left)
            left = right;
            right = right+1
        }
    }

    ans = Math.max(ans, distance)

    STRING[i] = 0;
}

console.log(ans)