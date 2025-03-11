const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

const arr = Array.from({length:2001},()=>0);

let cursor = 1000;

let ans = 0;

for(const [val, dir] of commands){
  const num = Number(val)

  if(dir === 'R'){
    for(let i = cursor ; i <= cursor + val ; i++){
      arr[i]++
    }
  }else{
    for(let i = cursor ; i >= cursor - val ; i--){
      arr[i]++
    }
  }
}

let prev = arr[0];

for(let i = 1 ; i < arr.length ; i++){
  if(arr[i] >= 2 && prev >= 2) ans++;
  else prev = arr[i]
}

console.log(ans)