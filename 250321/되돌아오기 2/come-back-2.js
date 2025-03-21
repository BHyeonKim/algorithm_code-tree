const fs = require("fs");
const commands = fs.readFileSync(0).toString().trim().split('');

const delta = [[0,-1],[1,0],[0,1],[-1,0]]

let direction = 0;
let coordinate = [0,0]

let isAnswerExists = false;
let ans = 0;

for(const command of commands){
    ans++;

    if(command === 'F'){
        coordinate = [coordinate[0]+delta[direction][0],coordinate[1]+delta[direction][1]]
    }else if(command === 'L'){
        direction--;
        if(direction < 0){
            direction = 3;
        }
    }else{
        direction++;
        if(direction > 3){
            direction = 0;
        }
    }

    if(coordinate[0] === 0 && coordinate[1] === 0){
        isAnswerExists = true;
        break;
    }
}

if(isAnswerExists){
    console.log(ans)
}else{
    console.log(-1)
}


