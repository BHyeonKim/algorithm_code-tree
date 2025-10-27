const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].trim()split(' ').map(Number).sort((a,b)=>a-b);
const queries = input.slice(2).map(Number);



let ans = ''

for(const query of queries){
    const result = parametricSearch(numbers, query)
    if(result === -1){
        ans += -1 + '\n'
    }else{
        ans += String(result + 1) + '\n'
    }
}

console.log(ans)


function parametricSearch(arr,target){
    let left = 0, right = arr.length - 1;
    let targetIndex = -1;

    while(left <= right){
        const mid = Math.floor((right + left)/2);

        if(arr[mid] === target){
            targetIndex = mid;
            break;
        }

        if(arr[mid] > target){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }

    return targetIndex
}