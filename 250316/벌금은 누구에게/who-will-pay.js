const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

const arr = Array.from({length:n+1},()=>0);

for(const p of penalizedPersons){
    arr[p]++;

    if(arr[p] >= k){
        console.log(p)
        break;
    }
}