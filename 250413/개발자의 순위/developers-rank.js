const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.trim().split(' ').map(Number));

const [NUM_OF_GAME, NUM_OF_DEV] = input[0]
const games = input.slice(1);

let ans = 0;

for(let player1 = 1 ; player1 <= NUM_OF_DEV ; player1++){

    for(let player2 = 1 ; player2 <= NUM_OF_DEV ; player2++){
        let isExists = true;
        if(player1 === player2) continue;

        let count = 0;

        for(const game of games){
            
            const player1_rank = game.findIndex(player => player === player1);
            const player2_rank = game.findIndex(player => player === player2);

            if(player1_rank < player2_rank) count++;
            else{
                isExists = false;
                break;
            }
        }

        if(!isExists) continue;

        if(count === NUM_OF_GAME) ans++;
    }
}

console.log(ans)