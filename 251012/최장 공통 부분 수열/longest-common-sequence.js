const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = input[0].length
const M = input[1].length

const str1 = ' '.concat(input[0]);
const str2 = ' '.concat(input[1]);

let NEG = Number.MIN_SAFE_INTEGER;

const dp = Array.from({length: N+1},()=>Array.from({length: M+1}, ()=> 0));

let ans = 0;

for(let i = 1 ; i <= N ; i++){
    for(let j = 1 ; j <= M ; j++){
        if(str1[i] === str2[j]){
            dp[i][j] = Math.max(dp[i-1][j-1]) + 1
        }else{
            dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
        }

        ans = Math.max(ans, dp[i][j])
    }
}

console.log(ans)

// for(let i = 1 ; i <= N ; i++){
//     for(let j = 1 ; j <= M ; j++){
//         if(str1[i]===str2[j]){
//             dp[i][j] = 1;
//         }
//     }
// }


// for(let i = 2 ; i <= N ; i++){
//     for(let j = 2 ; j <= M ; j++){
//         if(str1[i] === str2[j]){
            
//             let prevMax = NEG;

//             for(let k = 1 ; k < i ; k++){
//                 for(let l = 1 ; l < j ; l++){
//                     prevMax = Math.max(prevMax, dp[k][l])
//                 }
//             }

//             dp[i][j] = Math.max(dp[i][j], prevMax === NEG ? dp[i][j] : prevMax + 1)

//             ans = Math.max(ans, dp[i][j])
//         }
//     }
// }

