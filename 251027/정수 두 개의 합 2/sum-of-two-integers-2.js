const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(Number).sort((a,b)=>a-b);



let ans = 0;

for(let i = N - 1 ; i >= 1 ; i--){
    if(arr[i] > K) continue;
    let foundAnswer = false;

    for(let j = 0 ; i > j ; j++){
        if(arr[i] + arr[j] <= K){
            ans += (i - j);
            foundAnswer = true;
            break;
        }
    }

    if(foundAnswer) break
}


console.log(ans)