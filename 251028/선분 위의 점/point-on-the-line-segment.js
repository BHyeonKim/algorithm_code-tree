const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const points = input[1].split(' ').map(Number).sort((a,b)=>a-b);
const lines = input.slice(2).map(line => line.split(' ').map(Number));

let ans = ''

for(const[start, end] of lines){
    const lowerBound = getLowerBound(points, start);
    const upperBound = getUpperBound(points, end);

    if(lowerBound === -1){
        ans += '0\n';
    }else if(upperBound === -1){
        ans += (N - lowerBound) + '\n';
    }else{
        ans += (upperBound - lowerBound) + '\n';
    }
}

console.log(ans.trim())

function getUpperBound(arr, target){
    let left = 0, right = arr.length - 1;
    let bound = arr.length;

    while(left <= right){
        const mid = Math.floor((left+right)/2);

        if(arr[mid] > target){
            bound = Math.min(bound, mid);
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }

    return bound === arr.length ? -1 : bound;
}

function getLowerBound(arr, target){
    let left = 0, right = arr.length - 1;
    let bound = arr.length;

    while(left <= right){
        const mid = Math.floor((left+right)/2);

        if(arr[mid] >= target){
            bound = Math.min(bound, mid);
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }

    return bound === arr.length ? -1 : bound;
}