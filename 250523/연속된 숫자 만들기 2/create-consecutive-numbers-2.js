const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr = input[0].split(" ").map(Number);

let count = 0;

while(!isContinuous(...arr)){
    arr.sort((a,b)=>a-b)
    const distA = arr[1] - arr[0]
    const distB = arr[2] - arr[1]
    if(distA > distB && distB >= 2){
        arr[0] = arr[2] - 1;
    }else if(distA > distB){
        arr[2] = arr[1] - 1
    }else if(distA < distB && distA >= 2){
        arr[2] = arr[1] - 1;
    }else if(distA < distB){
        arr[0] = arr[2] - 1
    }

    count++
}

console.log(count)




function isContinuous(...arr){
    let isContinuous = true;

    const numbers = [...arr].sort((a,b)=>a-b)
    for(let i = 0 ; i < numbers.length - 1 ; i++){
        if(numbers[i] + 1 !== numbers[i+1]){
            isContinuous = false;
            break;
        }
    }

    return isContinuous;
}