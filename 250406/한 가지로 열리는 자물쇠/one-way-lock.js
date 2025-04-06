const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const [A, B, C] = input[1].split(' ').map(Number);

let ans = 0;

for(let i = 1 ; i <= N ; i++){
    for(let j = 1 ; j <= N ; j++){
        for(let k = 1 ; k <= N ; k++){
            if(Math.abs(i-A) <= 2 || Math.abs(j-B) <= 2 || Math.abs(k-C) <=2) ans++
        }
    }
}

console.log(ans)