const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const rectangles = input.slice(1).map(line=>line.split(' ').map(Number));

const grid = Array.from({length:200},()=>Array.from({length:200},()=>0));

let isRed = true;

for(const [x1,y1,x2,y2] of rectangles){
    for(let i = x1 ; i < x2 ; i++){
        for(let j = y1 ; j < y2 ; j++){
            if(isRed){
                grid[i+100][j+100] = 1;
            }else{
                grid[i+100][j+100] = 2;
            }
            
        }
    }
    isRed = !isRed
}

let ans = 0;

for(let i = 0 ; i < 200 ; i++){
    for(let j = 0 ; j < 200 ; j++){
        if(grid[i][j] === 2){
            ans++
        }
    }
}

console.log(ans)