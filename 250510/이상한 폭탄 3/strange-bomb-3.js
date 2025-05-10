const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const bombs = input.slice(1).map(Number);

let max = 0
let ans = 0;

for(let i = 0 ; i < N ; i++){
    const bomb = bombs[i]
    const exploded = explode(i, bomb, 0)

    if(exploded > max){
        max = exploded;
        ans = bomb
    }else if(exploded === max){
        ans = ans > bomb ? ans : bomb
    }
}

console.log(ans)


function explode(index, bomb, count){

        if(index === N) return count;

        let currentCount = count;
        let lastIndex = -1

        for(let i = index ; i <= index+K && i < N ; i++){
            if(bombs[i] === bomb){
                currentCount++;
                lastIndex = i;
            }
        }

        if(lastIndex !== -1){
            return explode(lastIndex+1, bomb, currentCount)
        }else{
            return currentCount
        }
}

