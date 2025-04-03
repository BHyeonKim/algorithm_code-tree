const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

let ans = 0;

let i = 0;
let j = i + M;

while(j <= N){
    let copy = [...arr2];
    for(let k = i ; k < j; k++){
        if(copy.includes(arr1[k])){
            const idx = copy.findIndex(value=>value===arr1[k]);
            copy = copy.filter((_,index)=>index !== idx)
        }else{
            break;
        }
    }

    if(!copy.length) ans++;

    i++;
    j++;
}

console.log(ans)