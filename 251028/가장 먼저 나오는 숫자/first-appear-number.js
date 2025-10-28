const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);
const queries = input[2].split(' ').map(Number);


let ans = ''

for(const query of queries){
    const result = getLowerBound(query);

    ans += result + '\n'
}


console.log(ans.trim())


function getLowerBound(target){
    let left = 0, right = N - 1;

    let bound = N;

    while (left <= right){
        const mid = Math.floor((left+right)/2);

        if(arr[mid] >= target){
            bound = Math.min(bound, mid)
            right = mid - 1
        }else{
            left = mid + 1
        }
    }

    return bound === N || arr[bound] !== target ? -1 : bound + 1
}