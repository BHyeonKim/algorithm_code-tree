const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const TOTAL = input.reduce((acc,cur)=>acc+cur,0);
const visited = Array.from({length:input.length},()=>false);

let ans = TOTAL;

for(let i = 0 ; i < input.length - 1 ; i++){
    visited[i] = true;
    for(let j = i+1 ; j < input.length ; j++){
        visited[j] = true;
        const team1 = input[i] + input[j];

        for(let k = 0 ; k < input.length && !visited[k] ; k++){
            const team2 = input[k];
            const team3 = TOTAL - team1 - team2;

            if(team1 === team2 || team2 === team3 || team1 === team3) continue;

            const teams = [team1,team2,team3].sort((a,b)=>a-b);
            const diff = Math.abs(teams[0]- teams[2]);

            ans = ans > diff ? diff : ans
        }

        visited[j] = false;
    }
    visited[i] = false;
}


if(ans === TOTAL){
    console.log(-1)
}else{
    console.log(ans)
}