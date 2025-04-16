const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

let ans = 0;

for(let num = x ; num <= y ; num++){
    const numArr = String(num).split('');

    let acc = 0;

    for(const n of numArr){
        acc += +n;
    }

    ans = ans > acc ? ans : acc;
}

console.log(ans)