const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

console.log(decimalToBinary(binaryToDecimal(binaryInput)*17))


function binaryToDecimal(num){
    const binary = String(num);
    let decimal = 0;

    for(let i = binary.length - 1 ; i >= 0 ; i--){
        decimal += Math.pow(2, binary.length - i - 1) * binary[i];
    }

    return decimal;
}

function decimalToBinary(num){
    let binary = '';

    while(num !== 0){
        binary =  num % 2 + binary;
        num = Math.floor(num / 2)
    }

    return +binary;
}