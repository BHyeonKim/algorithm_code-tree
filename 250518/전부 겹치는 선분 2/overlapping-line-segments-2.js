const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = +input[0]
const lines = input.slice(1).map(line=>line.split(' ').map(Number));

let isAnswerExists = false;

for(let exclude = 0 ; exclude < N ; exclude++){
    const visited = Array(101).fill(0);

    for(let i = 0 ; i < N ; i++){
        if(exclude === i) continue;

        const [start, end] = lines[i]
        for(let j = start ; j <= end ; j++){
            visited[j]++;
        }
    }

    for(let i = 0 ; i <= 100 ; i++){
        if(visited[i] === N -1){
            isAnswerExists = true;
            break;
        }
    }

    if(isAnswerExists)break;
}

console.log(isAnswerExists ? 'Yes' : 'No')