const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

let faster;
let prevFaster;
let ans = 0;

let phaseOfA = 0;
let phaseOfB = 0;

let distanceOfA = 0;
let distanceOfB = 0;

let timeOfA = 0;
let timeOfB = 0;

while(true){
    if(phaseOfA < aData.length){
        timeOfA++;

        const [v, t] = aData[phaseOfA]

        distanceOfA += v;

        // console.log('A:',v, t,' distanceOfA:', distanceOfA)


        if(t === timeOfA){
            timeOfA = 0;
            phaseOfA++;
        }
    }

    if(phaseOfB < bData.length){
        timeOfB++;

        const [v, t] = bData[phaseOfB]

        distanceOfB += v;

        // console.log('B:',v, t,' distanceOfB:', distanceOfB)


        if(t === timeOfB){
            timeOfB = 0;
            phaseOfB++;
        }
    }

    if(distanceOfA > distanceOfB){
        faster = 1;
    }else if(distanceOfA < distanceOfB){
        faster = 2;
    }

    // console.log('faster:', faster === 1 ? 'A' : 'B')

    if(!prevFaster){
        prevFaster = faster;
    }

    if(faster !== prevFaster){
        ans++;
        prevFaster = faster
    }

    if(phaseOfA === aData.length && phaseOfB === bData.length)break;
}

console.log(ans)