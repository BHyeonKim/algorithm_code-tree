const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [N, T] = input[0].split(' ').map(Number);
const commands = input[1].split('');
const board = input.slice(2, 2 + N).map(row => row.split(' ').map(Number));


let point = [parseInt(N/2),parseInt(N/2)]

let delta = [[-1, 0], [0, 1], [1, 0], [0, -1]]
let direction = 0;

let score = board[point[0]][point[1]];

for(let command of commands){
    if(command === 'F'){
        let nr = point[0] + delta[direction][0]
        let nc = point[1] + delta[direction][1]

        if(nr < 0 || nr >= N || nc < 0 || nc >= N) continue

        point = [nr, nc]
        score += board[nr][nc]
    }else if(command === 'L'){
        rotateLeft()
    }else if(command === 'R'){
        rotateRight()
    }
}

console.log(score)

function rotateRight(){
    direction = (direction + 1) % 4
}

function rotateLeft(){
    direction = direction === 0 ? 3 : direction - 1
}