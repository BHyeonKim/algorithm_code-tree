const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(" ").map(Number);


console.log(isAligned([1,2,3]))

function isAligned(arr){
    const sorted = [...arr].sort((a,b)=>a-b)
    for(let i = 0 ; i < sorted.length - 1 ; i++){
        if(sorted[i]+1 !== sorted[i+1]) return false
    }

    return true;
}
