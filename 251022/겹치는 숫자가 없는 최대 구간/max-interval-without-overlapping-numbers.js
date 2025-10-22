const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = +input[0];
const arr = input[1].split(" ").map(Number);

let i = 0, j = 0;
const map = new Map();
let ans = 0;

while(j < N){
    map.set(arr[j], (map.get(arr[j]) || 0) + 1);

    while(map.get(arr[j]) > 1){
        map.set(arr[i], map.get(arr[i]) - 1);
        if(map.get(arr[i]) === 0){
            map.delete(arr[i]);
        }
        i++;
    }

    ans = Math.max(ans, j - i + 1);
    j++;
}

console.log(ans);