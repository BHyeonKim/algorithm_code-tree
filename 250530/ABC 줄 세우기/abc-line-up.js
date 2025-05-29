const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(char=>String(char).charCodeAt(0)-65);


let ans = 0;

let targetCharacter = 0;

while(targetCharacter < N){
    let currentIndex = -1;

    for(let i = 0 ; i < N ; i++){
        if(arr[i] === targetCharacter){
            currentIndex = i;
        }
    }

    ans += swap(currentIndex, targetCharacter, arr);

    targetCharacter++;
}

console.log(ans)

function swap(currentIndex, targetIndex, arr){
    let cur = currentIndex;
    let target = currentIndex - 1;

    let swapCount = 0;

    while(target >= targetIndex){
        const temp = arr[cur];
        arr[cur] = arr[target];
        arr[target] = temp;

        swapCount++;

        cur--;
        target--;
    }

    return swapCount;
}