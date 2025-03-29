const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input.slice(1).map(Number);

let ans = -1;

for(let i = 0 ; i < arr.length - 2 ; i++){
    for(let j = i+1 ; j < arr.length - 1 ; j++){
        if(isCarrying(arr[i], arr[j])) continue;
        for(let k = j+1 ; k < arr.length ; k++){
            if(isCarrying(arr[i]+arr[j],arr[k])) continue;
            ans = ans > arr[i] + arr[j] + arr[k] ? ans : arr[i] + arr[j] + arr[k];
        }
    }
}

function isCarrying(num1, num2){
    const bigNum = num1 > num2 ? num1 : num2;

    if(String(bigNum).length !== String(num1 + num2).length){
        return true;
    }

    const str1 = String(num1);
    const str2 = String(num2)

    let index1 = str1.length - 1;
    let index2 = str2.length - 1;

    while(index1 >= 0 && index2 >= 0){
        if(Number(str1[index1]) + Number(str2[index2]) > 9) return true;

        index1--;
        index2--;
    }

    return false;
}

console.log(ans)