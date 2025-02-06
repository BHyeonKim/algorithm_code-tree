const fs = require('fs')

const input = fs.readFileSync(0).toString().trim().split('\n');
const str1 = input[0].trim().split('').sort();
const str2 = input[1].trim().split('').sort();

let ans = 'Yes'

if(str1.length === str2.length){
    for(let i = 0; i < str1.length ; i++){
        if(str1[i] !== str2[i]){
            ans = 'No'
            break;
        }
    }
}else{
    ans = 'No'
}

console.log(ans)