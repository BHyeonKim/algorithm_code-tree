const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [aX1,aY1,aX2,aY2] = input[0].split(' ').map(v=>Number(v));
const [bX1,bY1,bX2,bY2] = input[1].split(' ').map(v=>Number(v));
const [mX1,mY1,mX2,mY2] = input[2].split(' ').map(v=>Number(v));

const grid = Array.from({length:2000},()=>Array.from({length:2000},()=>0));

const lx = Math.min(aX1 , bX1);
const rx = Math.max(aX2, bX2);
const by = Math.min(aY1, bY1);
const ty = Math.max(aY2, bY2);

for(let i = aX1 ; i < aX2 ; i++){
    for(let j = aY1 ; j < aY2 ; j++){
        grid[i+1000][j+1000] = 1;
    }
}

for(let i = bX1 ; i < bX2 ; i++){
    for(let j = bY1 ; j < bY2 ; j++){
        grid[i+1000][j+1000] = 1;
    }
}

for(let i = mX1 ; i < mX2 ; i++){
    for(let j = mY1 ; j < mY2 ; j++){
        grid[i+1000][j+1000] = 2;
    }
}

let ans = 0;

for(let i = lx ; i < rx ; i++){
    for(let j = by ; j < ty ; j++){
        if(grid[i+1000][j+1000] === 1) ans++;
    }
}

console.log(ans)