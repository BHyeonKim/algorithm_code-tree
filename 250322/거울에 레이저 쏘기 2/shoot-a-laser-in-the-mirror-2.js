const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = +input[0]
const map = input.slice(1, 1+N).map(line=>line.split(''))
const startPoint = +input[1+N]

let currentCoordinate = [0,0]

let delta = [[0,1],[1,0],[0,-1],[-1,0]]
let currentDirection = 0;

for (let i = 2 ; i <= startPoint ; i++){
    if( i % N === 1){
        currentDirection++;
        continue
    }
    currentCoordinate = [currentCoordinate[0]+ delta[currentDirection][0], currentCoordinate[1]+ delta[currentDirection][1]]
}

let count = 0;

delta = [[1,0],[0,-1],[-1,0],[0,1]]


while(true){
    count++;

    if(map[currentCoordinate[0]][currentCoordinate[[1]]] === '/'){
        if(currentDirection === 0){
            currentDirection = 1;
        }else if(currentDirection === 1){
            currentDirection = 0
        }else if(currentDirection === 2){
            currentDirection = 3;
        }else if(currentDirection === 3){
            currentDirection = 2;
        }
    }else if(map[currentCoordinate[0]][currentCoordinate[[1]]] === '\\'){
        if(currentDirection === 0){
            currentDirection = 3;
        }else if(currentDirection === 1){
            currentDirection = 2;
        }else if(currentDirection === 2){
            currentDirection = 1;
        }else if(currentDirection === 3){
            currentDirection = 0;
        }
    }
    currentCoordinate = [currentCoordinate[0]+ delta[currentDirection][0], currentCoordinate[1]+ delta[currentDirection][1]]

    if(currentCoordinate[0] < 0 || currentCoordinate[0] >= N || currentCoordinate[1] < 0 || currentCoordinate[1] >= N ) break;
}

console.log(count)