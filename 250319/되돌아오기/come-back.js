const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1).map(line=>line.split(' ').map((val,idx)=>idx===1?Number(val):val));

const grid =Array.from({length:201},()=>Array.from({length:201},()=>0))


const DELTA = {
    N:[0,1],
    E:[1,0],
    S:[0,-1],
    W:[-1,0]
}

let time = 0;
let coorinate = [100, 100]
let isExists = false;
let ans = 0;
for(const [Direction, T] of moves){
    if(isExists)break;
    time = 0;
    while(time < T){
        coorinate[0] += DELTA[Direction][0]
        coorinate[1] += DELTA[Direction][1]
        time++;
        ans++;

        if(coorinate[0] === 100 && coorinate[1] === 100){
            isExists = true;
            break;
        }
    }
}

if(isExists){
    console.log(ans)
}else{
    console.log(-1)
}