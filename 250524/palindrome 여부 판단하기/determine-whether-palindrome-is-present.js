const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];



let isPalindrome = true;


const len = parseInt(str.length / 2) - 1

for(let i = 0 ; i <= len ; i++){
    if(str[i] !== str[str.length - 1 - i]){
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome ? 'Yes' : 'No')
