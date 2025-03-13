const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rects = input.slice(1).map(line=>line.split(' ').map(Number));

const grid = Array.from({length:200},()=>Array.from({length:200},()=>false));

for(const [x, y] of rects){
    for(let i = x ; i < x+8; i++){
        for(let j = y ; j < y+8; j++){
            grid[i+100][j+100] = true;
        }
    }
}


let ans = 0;

for(let i = 0 ; i < 200 ; i++){
    for(let j = 0 ; j < 200 ; j++){
        if(grid[i][j]) ans += 1;
    }      
}

console.log(ans)