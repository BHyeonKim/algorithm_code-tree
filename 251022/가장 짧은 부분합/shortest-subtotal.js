const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, S] = input[0].split(" ").map(Number);
const sequence = input[1].split(" ").map(Number);



let ans = sequence.length;



let i = 0, j = 0;
let sum = 0;

sum = sequence[i];

while(i < sequence.length && j < sequence.length){
    if(i === j){
        if(sequence[i] >= S){
            ans = 1;
        }

        j++;
        sum += sequence[j]
    }else if(sum < S){
        j++;
        sum += sequence[j]
    }else if(sum >= S){
        const length = (j - i) + 1;
        ans = Math.min(ans, length);

        i++;
        sum -= sequence[i]
    }
}

console.log(ans)