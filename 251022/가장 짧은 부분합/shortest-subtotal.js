const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, S] = input[0].split(" ").map(Number);
const sequence = input[1].split(" ").map(Number);



let ans = sequence.length+1;



let i = 0, j = 0;
let sum = 0;

while(i < sequence.length && j < sequence.length){
      sum += sequence[j];

      while(sum >= S){
          ans = Math.min(ans, j - i + 1);
          sum -= sequence[i];
          i++;
      }

      j++;
}

console.log(ans === sequence.length+1 ? -1 : ans)