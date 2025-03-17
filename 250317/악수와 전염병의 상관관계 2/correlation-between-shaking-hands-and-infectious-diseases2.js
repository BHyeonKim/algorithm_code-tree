const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [N, K, firstInfected, T] = input[0].split(' ').map(Number);

const stages = input.splice(1).map(line=>line.split(' ').map(Number)).sort((a,b)=>a[0]-b[0]);

const infected = Array.from({length:N+1},()=>({infect:false,count:0}));

infected[firstInfected].infect = true;

for(const [_, x, y] of stages){
    if(infected[x].infect && infected[y].infect){
        if(infected[x].count < K) infected[x].count++
        if(infected[y].count < K) infected[y].count++
    }else if(infected[x].infect && infected[x].count < K){
        infected[x].count++
        infected[y].infect = true;
    }else if(infected[y].infect && infected[y].count < K){
        infected[y].count++
        infected[x].infect = true;
    }
}

console.log(infected.slice(1).map(data=>data.infect ? 1: 0).join(''))
