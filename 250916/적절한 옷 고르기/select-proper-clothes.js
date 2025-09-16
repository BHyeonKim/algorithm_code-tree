const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [N, M] = input[0];
const clothes = input.slice(1);

const dp = Array.from({length: M+1}, ()=>Array.from({length:N+1},()=>-1));

let ans = 0;

for(let clothIndex = 1 ; clothIndex <= N ; clothIndex++){
    const [startday] = clothes[clothIndex-1];

    if(startday === 1){
        dp[1][clothIndex] = 0;
    }
}


for(let day = 2 ; day <= M ; day++){
    for(let clothIndex = 1 ; clothIndex <= N ; clothIndex++){
        const [startDay, endDay, value] = clothes[clothIndex-1];

        if(day < startDay || endDay < day) continue;

        let maxValue = -1;
        for(let prevCloth = 1 ; prevCloth <= N ; prevCloth++){
            if(dp[day-1][prevCloth] !== -1){
                const prevClothValue = clothes[prevCloth-1][2];
                maxValue = Math.max(maxValue,Math.abs(value-prevClothValue)+dp[day-1][prevCloth]);
            }
        }

        dp[day][clothIndex] = maxValue;

        ans = Math.max(ans, dp[day][clothIndex])
    }
}

console.log(ans)
