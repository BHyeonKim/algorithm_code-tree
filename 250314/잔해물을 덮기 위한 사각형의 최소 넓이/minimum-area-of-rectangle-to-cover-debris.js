const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

const grid = Array.from({length:2000}, ()=> Array.from({length:2000},()=>0));

const [x1,y1, x2, y2] = rect1;

for(let x = x1 ; x < x2 ; x++){
    for(let y = y1 ; y < y2 ; y++){
        grid[x+1000][y+1000] = 1;
    }
}

const [x_1,y_1, x_2, y_2] = rect2;

for(let x = x_1 ; x < x_2 ; x++){
    for(let y = y_1 ; y < y_2 ; y++){
        grid[x+1000][y+1000] = 0;
    }
}


let leftBound = Number.POSITIVE_INFINITY;
let bottomBound = Number.POSITIVE_INFINITY
let rightBound = Number.NEGATIVE_INFINITY;
let topBound = Number.NEGATIVE_INFINITY;

for(let x = x1 ; x < x2 ; x++){
    for(let y = y1 ; y < y2 ; y++){
        if(grid[x+1000][y+1000]){
            leftBound = Math.min(leftBound, x)
            bottomBound = Math.min(bottomBound , y);
            rightBound = Math.max(rightBound ,x);
            topBound = Math.max(topBound, y);
        }
    }
}

if(rightBound === leftBound || topBound === bottomBound){
    console.log(0)
}else{
    console.log((rightBound - leftBound + 1) * (topBound - bottomBound + 1))
}
