const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const checked = Array.from({length:B},()=>false);


let a = 0;
let b = 0;

while(a < A.length && b < B.length){

    const current = A[a];
    const subItem = B[b];

    if(current === subItem){
        a++;
        b++;
    }else if(current !== subItem){
        a++
    }
}


console.log(b === B.length ? 'Yes' : 'No')