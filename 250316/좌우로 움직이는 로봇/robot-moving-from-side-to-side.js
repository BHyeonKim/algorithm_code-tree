const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n).map(line=>line.split(' '));
const movesB = input.slice(1 + n, 1 + n + m).map(line=>line.split(' '));

let positionOfA = 0;
let positionOfB = 0;

let prevPositionOfA = 0;
let prevPositionOfB = 0;

let stageOfA = 0;
let stageOfB = 0;

let stageTimeOfA = 0;
let stageTimeOfB = 0;

let ans = 0;

while(true){

    if(stageOfA < movesA.length){
        stageTimeOfA++;

        const [t, d] = movesA[stageOfA]

        if(d === 'R'){
            positionOfA += 1
        }else{
            positionOfA -= 1
        }

        if(stageTimeOfA === +t){
            stageTimeOfA = 0;
            stageOfA++;
        }

        // console.log(`A => t:${t},d:${d}, position:${positionOfA}`)
    }

     if(stageOfB < movesB.length){
        stageTimeOfB++;

        const [t, d] = movesB[stageOfB]

        if(d === 'R'){
            positionOfB += 1
        }else{
            positionOfB -= 1
        }

        if(stageTimeOfB === +t){
            stageTimeOfB = 0;
            stageOfB++;
        }

        // console.log(`B => t:${t},d:${d}, position:${positionOfB}`)
    }

    if(positionOfA === positionOfB && prevPositionOfA !== prevPositionOfB){
        ans++;
    }

    prevPositionOfA = positionOfA;
    prevPositionOfB = positionOfB;

    if(stageOfA === movesA.length && stageOfB === movesB.length){
        break;
    }
}

console.log(ans);

// const arr = Array.from({length: 2},()=> Array.from({length: 50_000 * 2 + 1}, ()=>0));