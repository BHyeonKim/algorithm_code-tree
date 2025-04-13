const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [NUM_OF_BOMB,DISTANCE] = input[0].split(' ').map(Number);

const bombArr = input.slice(1).map(Number);

let ans = -1;

for(let i = 0 ; i < NUM_OF_BOMB ; i++){
    const bombNum = bombArr[i];

    for(let j = i + 1 ; j <= i + DISTANCE ; j++){
        if(j >= NUM_OF_BOMB) break;

        if(bombNum === bombArr[j]){
            ans = ans > bombNum ? ans : bombNum
        }
    }
}

console.log(ans)