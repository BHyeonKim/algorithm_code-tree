const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr = input[0].split(" ").map(Number);


let count = 0;

while(!isAligned(arr)){
    arr.sort((a,b)=>a-b);
    
    if(arr[2] - arr[1] > 1 && arr[1] - arr[0] > 1){
        if(arr[2]-arr[1] > arr[1]-arr[0]){
            arr[0] = arr[2] - 1
        }else{
            arr[2] = arr[1] - 1
        }
    }else if(arr[2] - arr[1] > 1){
        arr[0] = arr[2] - 1;
    }else if(arr[1] - arr[0] > 1){
        arr[2] = arr[1] - 1;
    }

    count++;
}

console.log(count)

function isAligned(arr){
    const sorted = [...arr].sort((a,b)=>a-b)
    for(let i = 0 ; i < sorted.length - 1 ; i++){
        if(sorted[i]+1 !== sorted[i+1]) return false
    }

    return true;
}
