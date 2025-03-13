const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const grid = Array.from({length: 20},()=>Array.from({length:20},()=>false))

let xL = Number.POSITIVE_INFINITY;
let xR = Number.NEGATIVE_INFINITY;
let yB = Number.POSITIVE_INFINITY;
let yT = Number.NEGATIVE_INFINITY;

for(const [x1 ,y1, x2, y2] of rects){
    xL = Math.min(xL,x1);
    xR = Math.max(xR,x2);
    yB = Math.min(yB,y1);
    yT = Math.max(yT,y2);

    for(let i = x1 ; i < x2; i++){
        for(let j = y1 ; j < y2 ; j++){
                grid[i][j] = true
        }
    }
}

let ans = 0;

 for(let i = xL ; i < xR; i++){
    for(let j = yB ; j < yT ; j++){
            if(grid[i][j]) ans++;
    }
}

console.log(ans)