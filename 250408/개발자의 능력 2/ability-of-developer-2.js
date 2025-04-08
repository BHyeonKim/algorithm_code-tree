const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const TOTAL = input.reduce((acc,cur)=>acc+cur,0);

let ans = TOTAL;

for(let i = 0 ; i < input.length - 1 ; i++){
    for(let j = i+1 ; j < input.length ; j++){
        const team1 = input[i] + input[j];
        const resetTotal = TOTAL - team1;
        const restArr = input.filter((_,index)=> {if(index === i || index === j)return false;else return true})

        for(let k = 0 ; k < restArr.length - 1 ; k++){
            for(let t = k+1 ; t < restArr.length ; t++){
                const team2 = restArr[k] + restArr[t];
                const team3 = resetTotal - team2;

                const teamArr = [team1,team2,team3].sort((a,b)=>a-b);

                const diff = Math.abs(teamArr[0] - teamArr[2])

                ans = ans > diff ? diff : ans
            }
        }
    }
}

console.log(ans)