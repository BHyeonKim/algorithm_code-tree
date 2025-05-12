const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const MIN = 50*100

let ans = 0;

for(let min = 1 ; min <= MIN ; min++){
    let acc = 0;
    let countOfSection = 1;
    let maxAcc = 0;

    for(let i = 0 ; i < N ; i++){
        const currentValue = arr[i];

        if(currentValue + acc > min){
            maxAcc = Math.max(maxAcc, acc)
            countOfSection++;
            acc = currentValue
        }else{
            acc += currentValue
        }

        if(countOfSection > M){
            break;
        }

        if(i === N-1){
            ans = maxAcc;
            break;
        }
    }

    if(ans)break
}

console.log(ans)