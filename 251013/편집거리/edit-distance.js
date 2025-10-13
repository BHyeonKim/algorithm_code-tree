const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = " ".concat(input[0]);
const str2 = " ".concat(input[1]);

const dp = Array.from({length:str1.length + 1},()=> Array.from({length:str2.length + 1},()=>0));

for(let i = 1 ; i <= str1.length ; i++){
    dp[i][0] = i;
}

for(let j = 1 ; j <= str2.length ; j++){
    dp[0][j] = j;
}


for(let i = 1 ; i <= str1.length ; i++){
    for(let j = 1 ; j <= str2.length ; j++){
        if(str1[i] === str2[j]){
            dp[i][j] = dp[i-1][j-1]
        }else{
            dp[i][j] = Math.min(Math.min(dp[i-1][j-1], dp[i-1][j]), dp[i][j-1]) + 1
        }
    }
}

console.log(dp[str1.length][str2.length])