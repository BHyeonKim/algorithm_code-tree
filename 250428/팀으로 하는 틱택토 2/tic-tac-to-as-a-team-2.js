const fs = require('fs')
const grid = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split('').map(Number))

const delta = [[0, 1], [1, 0], [1, 1], [-1, 1]]

let answerExists = false;
let ans = 0;

function dfs(row, col, i, j, numOfI, numOfJ, depth, delta){
    if(answerExists) return;

    if(depth >= 3){
        if(numOfI && numOfJ && numOfI+numOfJ === 3){
            answerExists = true;
            ans++;
        }
        return;
    }

    if(row < 0 || row >= 3 || col < 0 || col >= 3) return;


    const nextRow = row + delta[0];
    const nextCol = col + delta[1];

    if(grid[row][col] === i){
        dfs(nextRow, nextCol, i, j, numOfI+1, numOfJ, depth + 1, delta);
    }else if(grid[row][col] === j){
        dfs(nextRow, nextCol, i, j, numOfI, numOfJ+1, depth + 1, delta);
    }
    
}

for(let i = 1 ; i < 9 ; i++){
    for(let j = i + 1 ; j <= 9 ; j++){
        answerExists = false;
        dfs(0, 0, i, j, 0, 0, 0, delta[1])
        dfs(0, 1, i, j, 0, 0, 0, delta[1])
        dfs(0, 2, i, j, 0, 0, 0, delta[1])

        dfs(0, 0, i, j, 0, 0, 0, delta[2])
        dfs(0, 0, i, j, 0, 0, 0, delta[0]);

        dfs(1, 0, i, j, 0, 0, 0, delta[0])
        dfs(2, 0, i, j, 0, 0, 0, delta[0])

        dfs(2, 0, i, j, 0, 0, 0, delta[3]);
    }
}

console.log(ans)