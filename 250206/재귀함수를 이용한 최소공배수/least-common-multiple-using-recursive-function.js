const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);

console.log(recur(1,0))


function gcd(a,b){
    if(b === 0) return a;
    return a > b ? gcd(b , a % b) : gcd(a, b % a);
}

function lcm(a,b){
    return a * b / gcd(a,b);
}

function recur(prev ,depth){
    if(depth === arr.length - 1){
        const current = arr[depth];

        return lcm(prev, current)
    }

    const current = arr[depth];
    const currentLcm = lcm(prev, current)

    return recur(currentLcm,depth+1)
}