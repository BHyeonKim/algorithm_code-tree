const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const bombs = input.slice(1).map(Number);
const visited = Array(N).fill(false);

const map = new Map()

let max = 0
let ans = 0;

for(let i = 0 ; i < N ; i++){
    if(visited[i]) continue;

    const bomb = bombs[i]
    const exploded = explode(i, bomb, 0)



    if(map.has(bomb)){
        map.set(bomb, map.get(bomb)+exploded)
    }else{
        map.set(bomb, exploded)
    }
}

let ansBomb = 0;
let ansCount = 0;

for(const [bombNumber, explodedCount] of map.entries()){
    if(explodedCount > ansCount){
        ansCount = explodedCount;
        ansBomb = bombNumber
    }else if(explodedCount === ansCount){
        ansBomb = ansBomb > bombNumber ? ansBomb : bombNumber
    }
}

console.log(ansBomb)

function explode(index, bomb, count){

        if(index === N) return count;

        let currentCount = count;
        let lastIndex = -1

        for(let i = index ; i <= index+K && i < N ; i++){
            if(bombs[i] === bomb){
                visited[i] = true;
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

