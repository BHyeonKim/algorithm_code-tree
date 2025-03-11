const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.

function decimalToNth(decimal, n){
    let converted = '';

    while(decimal !== 0){
        converted = converted + decimal % n;
        decimal = Math.floor(decimal / n)
    }

    return converted;
}

function convertedToDecimal(convertedNum, n){
    let decimal = 0;
}
