const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = +input[1];

console.log(decimalToConverted(convertedToDecimal(n, a), b))



function decimalToConverted(decimal, n){
    let converted = '';

    while(decimal !== 0){
        converted = decimal % n + converted;
        decimal = Math.floor(decimal / n)
    }

    return Number(converted);
}

function convertedToDecimal(convertedNum, n){
    const num = String(convertedNum);
    let decimal = 0;

    for(let i = num.length - 1 ; i >= 0 ; i--){
        decimal += num[i] * Math.pow(n, num.length - i -1);
    }

    return Number(decimal);
}
