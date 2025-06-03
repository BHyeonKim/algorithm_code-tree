const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const board = input.map(line=>line.split(''));


const L = []
const R = []
const B = []

for(let i = 0 ; i < 10 ; i++){
    for(let j = 0 ; j < 10 ; j++){
        if(board[i][j] === 'L') L.push(i,j)
        else if(board[i][j] === 'R') R.push(i,j);
        else if(board[i][j] === 'B') B.push(i,j);
    }
}

if(L[0] !== B[0] && L[1] !== B[1]){
    console.log(Math.abs(L[0]-B[0])+Math.abs(L[1]-B[1])-1)
}else if(L[0] !== B[0]){
    const big = Math.abs(L[0],B[0])
    const small = Math.abs(L[0],B[0])

    if(small < R[0] && R[0] < big){
        console.log(Math.abs(L[0]-B[0])+3)
    }else{
        console.log(Math.abs(L[0]-B[0]))
    }
}else if(L[1] !== B[1]){
    const big = Math.abs(L[1],B[1])
    const small = Math.abs(L[1],B[1])

    if(small < R[1] && R[1] < big){
        console.log(Math.abs(L[1]-B[1])+3)
    }else{
        console.log(Math.abs(L[1]-B[1]))
    }
}