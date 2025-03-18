const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, T] = input[0].split(' ').map(Number);
let [R, C, Direction] = input[1].split(' ').map((value,index)=> index === 2 ? value : Number(value));

const BOTTOM = 1;
const TOP = N;
const LEFT = 1;
const RIGHT = N;


if(Direction === 'R' || Direction === 'L'){
    for(let time = 0 ; time < T ; time++){
        if(Direction === 'R'){
            if(C === RIGHT){
                Direction = 'L'
            }else{
                C++;
            }
        }else{
            if(C === LEFT){
                Direction = 'R'
            }else{
                C--;
            }
        }
    }
}else{
    for(let time = 0 ; time < T ; time++){
        if(Direction === 'U'){
            if(R === BOTTOM){
                Direction = 'B'
            }else{
                R--;
            }
        }else{
            if(R === TOP){
                Direction  = 'U'
            }else{
                R++;
            }
        }
    }
}

console.log(R+' '+C)