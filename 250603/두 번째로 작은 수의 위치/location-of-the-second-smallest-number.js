const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const a = input[1].split(" ").map(Number);

const sortedA = [...new Set(a).values()].sort((a,b)=>a-b);

const second = sortedA[1];

const isExists = a.filter(num=>num===second).length === 1

if(isExists){
    console.log(a.indexOf(second)+1)
}else{
    console.log(-1)
}
