const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, B] = input[0].split(' ').map(Number);

const demands = input.slice(1).map(line=>Number(line.trim())).sort((a,b)=>a-b);

let ans = 0;

for(let i = 0 ; i < N ; i++){
    let budget = B;
    let count = 0;
    for(let j = 0 ; j < N ; j++){
        let demand = demands[j]
        if(i === j){
            demand = demand / 2;
        }
        
        budget -= demand;
        if(budget < 0)break;
        count++;
    }

    ans = ans > count ? ans : count;
}

console.log(ans)