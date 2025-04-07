const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const [A1, B1, C1] = input[1].split(' ').map(Number);
const [A2, B2, C2] = input[2].split(' ').map(Number);

let ans = 0;

for(let i = 1 ; i <= N ; i++){
    for(let j = 1 ; j <= N ; j++){
        for(let k = 1 ; k <= N ; k++){
            if((isInRange(i, A1) && isInRange(j, B1) && isInRange(k, C1)) || (isInRange(i, A2) && isInRange(j, B2) && isInRange(k, C2))) ans++;
        }
    }
}

console.log(ans)

function isInRange(a,b){
    if(Math.abs(a-b) <= 2) return true;

    if(a > b){
        a = a - 9;
    }else{
        b = b - 9;
    }

    if(Math.abs(a-b) <= 1) return true;

    return false;
}
