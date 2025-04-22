const fs = require('fs')
const [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const mulA = parseInt(C / A);
const mulB = parseInt(C / B);



let ans = 0;

for(let a = 0 ; a <= mulA ; a++){
    for(let b = 0 ; b <= mulB ; b++){
        const num = A * a + B * b 
        if(num > C) break;
        ans = ans > num ? ans : num
    }
}

console.log(ans)