const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('');


let ans = [0, 0]
let currentDelta = [0, 1];

function rotateClock(delta){
    const [x, y] = delta;

    if(x === 0 && y === 1){
        return [1, 0]
    }else if(x === 1 && y ===0){
        return [0, -1]
    }else if(x === 0 && y === -1){
        return [-1, 0]
    }else {
        return [0, 1]
    }
}

function rotateCounterClock(delta){
    const [x, y] = delta;

    if(x === 0 && y === 1){
        return [-1, 0]
    }else if(x === -1 && y ===0){
        return [0, -1]
    }else if(x === 0 && y === -1){
        return [1, 0]
    }else {
        return [0, 1]
    }
}


for(const command of input){
    if(command === 'F'){
        ans[0] += currentDelta[0];
        ans[1] += currentDelta[1];
    }else if(command === 'R'){
        currentDelta = rotateClock(currentDelta)
    }else{
        currentDelta = rotateCounterClock(currentDelta)
    }
}

console.log(ans.join(' '))