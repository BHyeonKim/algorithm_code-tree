const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const NUM_OF_LINE = +input[0]


const visited = Array.from({length:NUM_OF_LINE},()=>false);

const lines = input.slice(1).map(line=>line.split(' ').map(Number).sort((a,b)=>a-b)).sort((a,b)=>a[1]-b[1]);

let ans = 0;

for(let i = 0 ; i < NUM_OF_LINE - 2 ; i++){
    visited[i] = true;

    for(let j = i + 1 ; j < NUM_OF_LINE - 1 ; j++){
        visited[j] = true;
        for(let k = j + 1 ; k < NUM_OF_LINE ; k++){
            visited[k] = true;

            let count = 1;
            let prevLine;

            for(let v = 0 ; v < NUM_OF_LINE ; v++){
                if(visited[v]) continue;
                if(!prevLine){
                    prevLine = lines[v];
                    continue;
                } 

                const currentLine = lines[v];

                if(currentLine[0] <= prevLine[1]){
                    break;
                }

                prevLine = currentLine;
                count++;
            }

            if(count === NUM_OF_LINE - 3) ans++;

            visited[k] = false;
        }
        visited[j] = false;
    }
    visited[i] = false;
}

console.log(ans)