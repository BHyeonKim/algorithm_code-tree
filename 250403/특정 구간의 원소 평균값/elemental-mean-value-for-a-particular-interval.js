const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[1].trim().split(' ').map(Number);



let ans = 0;
for(let i = 0 ; i < arr.length ; i++){
    for(let j = i+1 ; j <= arr.length ; j++){
        let sum = 0;
        for(let k = i ; k < j ; k++){
            sum += arr[k];
        }
        const average = sum / (j - i);
        if(arr.slice(i,j).includes(average)) ans++;
    }
}

console.log(ans)