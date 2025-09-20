const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const N = input[0][0]
const floors = [0, ...input.slice(1)]

const dp = Array.from({length:N+1},()=>Array.from({length:4},()=>Array.from({length:2},()=>0)))


for(let i = 1 ; i <= 3 ; i++){
    dp[1][i][0] = floors[1][i-1];
    dp[1][i][1] = i;
}


let ans = 0;

const arr = [1, 2 ,3]

for(let i = 2 ; i <= N ; i++){
    if(i === N){

        for(const currentFloor of arr){
            const [prevFloor1, prevFloor2] = arr.filter(floor=> floor !== currentFloor)

            const prevBiggerFloor = dp[i-1][prevFloor1][0] > dp[i-1][prevFloor2][0] && dp[i-1][prevFloor1][1] !== currentFloor ? prevFloor1 : prevFloor2

            dp[i][currentFloor][0] = dp[i-1][prevBiggerFloor][0] + floors[i][currentFloor - 1]

            ans = Math.max(ans, dp[i][currentFloor][0])
        }

    }else{

        for(const currentFloor of arr){
            const [prevFloor1, prevFloor2] = arr.filter(floor=> floor !== currentFloor)

            const prevBiggerFloor = dp[i-1][prevFloor1][0] > dp[i-1][prevFloor2][0] ? prevFloor1 : prevFloor2

            dp[i][currentFloor][0] = dp[i-1][prevBiggerFloor][0] + floors[i][currentFloor - 1]
            dp[i][currentFloor][1] = dp[i-1][prevBiggerFloor][1]
        }
    }
}

console.log(ans)