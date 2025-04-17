const fs = require('fs')
const [start, end] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let ans = 0;

for(let num = start ; num <= end ; num++){
    let num1;
    let num2;

    let numOfNum1 = 0;
    let numOfNum2 = 0;

    const numArr = String(num).split('').map(Number);

    for(const val of numArr){
        if(num1 === val){
            numOfNum1++
            continue;
        }else if(num2 === val){
            numOfNum2++
            continue;
        }

        if(typeof num1 === 'undefined'){
            num1 = val;
            numOfNum1++;
            continue;
        }else if(typeof num2 === 'undefined'){
            num2 = val;
            numOfNum2++;
            continue;
        }

        // 위의 조건에 하나도 해당하지 않으면 break;
        break;
    }

    if(numOfNum1 + numOfNum2 === numArr.length && (numOfNum1 === numArr.length - 1 || numOfNum2 === numArr.length - 1)) ans++;
    
}

console.log(ans)