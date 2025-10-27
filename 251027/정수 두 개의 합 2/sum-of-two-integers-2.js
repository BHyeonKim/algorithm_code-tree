const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(Number).sort((a,b)=>a-b);



let ans = 0;

for(let i = 0 ; i < N - 1 ; i++){
    for(let j = N - 1 ; i < j ; j--){

        if(arr[i] + arr[j] <= K){
            ans += (j - i)
            break;
        }
    }
}


console.log(ans)
