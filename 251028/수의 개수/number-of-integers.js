const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].trim().split(' ').map(Number);
const queries = input.slice(2, 2 + M).map(Number);

let ans = ''

for(const query of queries){
    const dist = getUpperBound(numbers,query) - getLowerBound(numbers,query)
    ans += dist + '\n'
}

console.log(ans)

function getLowerBound(arr,target){
    let left = 0, right = N -1;

    let lowerBound = N;

    while(left <= right){
        const mid = Math.floor((left+right)/2);

        if(arr[mid] >= target){
            lowerBound = Math.min(lowerBound, mid)
            right = mid-1;
        }else{
            left = mid+1;
        }
    }

    return lowerBound;
}


function getUpperBound(arr,target){
    let left = 0, right = N -1;

    let upperBound = N;

    while(left <= right){
        const mid = Math.floor((left+right)/2);

        if(arr[mid] > target){
            upperBound = Math.min(upperBound, mid)
            right = mid-1;
        }else{
            left = mid+1;
        }
    }

    return upperBound
}