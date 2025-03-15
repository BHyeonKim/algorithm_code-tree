const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);

const A_arr = input.slice(1, 1+n).map(line=>line.split(' ').map((item,i)=> i === 1 ? Number(item) : item))
const B_arr = input.slice(1+n).map(line=>line.split(' ').map((item,i)=> i === 1 ? Number(item) : item))


let stage_A = 0;
let stage_B = 0;

let time_A = 0;
let time_B = 0;
let time = 0;

let cooridante_A = 0;
let cooridante_B = 0;


while(true){

    if(stage_A < A_arr.length){

        time_A++;

        const [dir_a, time_a] = A_arr[stage_A];

        if(dir_a === 'R'){
            cooridante_A++
        }else{
            cooridante_A--;
        }


        if(time_A === time_a){ 
            stage_A++;
            time_A = 0;
        }

    }

    if(stage_B < B_arr.length){

        time_B++;

        const [dir_b, time_b] = B_arr[stage_B];

        if(dir_b === 'R'){
            cooridante_B++
        }else{
            cooridante_B--;
        }


        if(time_B === time_b){ 
            stage_B++;
            time_B = 0;
        }

    }

    time++;

    if(cooridante_A === cooridante_B) break;
}

console.log(time)