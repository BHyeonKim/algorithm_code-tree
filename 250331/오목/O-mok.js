const fs = require("fs");
const grid = fs.readFileSync(0).toString().trim().split('\n').map(row => row.split(' '));;

let isAnswerExists = false;
let winner = 0;
let midRow = -1;
let midCol = -1
let numOfBlockLeft = 0;;

for(let i = 0 ; i < 19 ; i++){
    for(let j = 0 ; j < 19 ; j++){
        if(grid[i][j] !== '0') numOfBlockLeft++;
    }
}


const delta = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]];


for(let r = 0 ; r < 19 && numOfBlockLeft > 0 && !isAnswerExists ; r++){
    for(let c = 0 ; c < 19 && numOfBlockLeft > 0 && !isAnswerExists ; c++){
        if(grid[r][c] === '0') continue;
        scan(r,c)
        numOfBlockLeft--;
    }
}

console.log(winner > 0 ? `${winner}\n${midRow+1} ${midCol+1}` : 0)


function scan(startRow,startCol){
    const TYPE_OF_BLOCK = grid[startRow][startCol]


    for(const [r,c] of delta){
        const rowBound = startRow + r*4
        const colBound = startCol + c*4;

        if(rowBound < 0 || rowBound >= 19 || colBound < 0 || colBound >= 19) continue;

        isAnswerExists = true;

        for(let i = 1 ; i < 5 ; i++){
            const nr = startRow + r*i;
            const nc = startCol + c*i;

            if(grid[nr][nc] !== TYPE_OF_BLOCK){
                isAnswerExists = false;
                break;
            }
        }


        if(isAnswerExists){
            winner = TYPE_OF_BLOCK === '1' ? 1 : 2
            midRow = Math.abs(startRow+rowBound)/2;
            midCol = Math.abs(startCol+colBound)/2;
            return;
        }
    }
}