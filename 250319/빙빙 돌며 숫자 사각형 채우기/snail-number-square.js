const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const grid = Array.from({length:N},()=>Array.from({length:M}, () => 0))

let dir = 'R';

let current = [0, 0]
let count = 1;


while(count <= N * M){
    const [x, y] = current;

    grid[y][x] = count;
    count++

    if(count > N * M)break;

    if(dir === 'R'){
        if(x+1 >= M || grid[y][x+1]){
            dir = 'T';
            current = [x, y+1]
        }else{
            current = [x+1, y]
        }
    }else if(dir === 'T'){
        if(y+1 >= N || grid[y+1][x]){
            dir = 'L';
            current = [x-1, y]
        }else{
            current = [x, y+1]
        }
    }else if(dir === 'L'){
        if(x-1 < 0 || grid[y][x-1]){
            dir = 'B';
            current = [x, y-1]
        }else{
            current = [x-1, y]
        }
    }else if(dir === 'B'){
        if(y-1 < 0 || grid[y-1][x]){
            dir = 'R';
            current = [x+1, y]
        }else{
            current = [x, y-1]
        }
    }
}




console.log(grid.map(cols=>cols.join(' ')).reduce((acc,cur)=> acc+cur+'\n','').trim())
