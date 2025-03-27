const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));
let ans = 0;

class Queue{
    _arr;
    _front;
    _rear;

    constructor(){
        this._arr = []
        this._front = 0;
        this._rear = 0;
    }

    enqueue(item){
        this._arr.push(item)
        this._rear++;
    }

    poll(){
        return this._arr[this._front++];
    }

    get size(){
        return this._rear - this._front;
    }
}

const queue = new Queue()

queue.enqueue({r:0,c:0,current:0})

while(queue.size){
    const {r, c, current} = queue.poll();

    if(current === 3 && r === R-1 && c === C-1){
        ans++;
        continue;
    }else if(current === 3){
        continue;
    }

    for(let nr = r+1 ; nr < R ; nr++){
        for(let nc = c+1 ; nc < C ; nc++){
            if(grid[r][c] !== grid[nr][nc] && current < 3) queue.enqueue({r:nr,c:nc,current:current+1})
        }
    }
}


console.log(ans)

