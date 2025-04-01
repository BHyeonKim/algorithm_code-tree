const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1, N + 1).map(line=>line.split(''));


const delta = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]

let ans = 0;


for(let i = 0 ; i < N ; i++){
    for(let j = 0 ; j < M ; j++){
        if(arr[i][j] === 'L') isLee(i,j)
    }
}

console.log(ans)


function isLee(r,c){

    for(const [dr,dc] of delta){
        let isAnswer = true;
        let nr = r+dr*2, nc = c+dc*2;
        if(nr < 0 || nr >= N || nc < 0 || nc >= M) continue;


        for(let i = 1; i <= 2 ; i++){
            nr = r+dr*i;
            nc = c+dc*i;

            if(arr[nr][nc] !== 'E'){
                isAnswer = false;
                break;
            }
        }

        if(isAnswer) ans++;
    }
}