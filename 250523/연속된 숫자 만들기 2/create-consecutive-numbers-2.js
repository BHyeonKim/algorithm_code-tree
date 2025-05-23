const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(" ").map(Number);


arr.sort((a,b)=>a-b);


const distA = arr[1] - arr[0]
const distB = arr[2] - arr[2];

if(distA === 1 && distB === 1){
    console.log(0)
}else if(distA === 2 || distB === 2){
    console.log(1)
}else{
    console.log(2)
}