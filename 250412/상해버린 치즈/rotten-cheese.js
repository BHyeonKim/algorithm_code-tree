const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [N, M, D, S] = input[0]

let eats = input.slice(1,1+D);
const sicks = input.slice(1+D);

const rottens = Array.from({length:N+1},()=>[]);


for(const [personSick, sickTime] of sicks){
    for(const [personAte, cheese, eatTime] of eats){
        if(personSick !== personAte) continue;

        if(sickTime <= eatTime) continue;

        rottens[personAte].push(cheese)
    }
}

const rottenCheck = Array.from({length:M+1},()=>true);
rottenCheck[0] = false;

for(let i = 1 ; i <= D ; i++){
    for(let j = 1 ; j <= N ; j++){
        if(!rottens[j].length) continue;
        if(!rottens[j].includes(i)) rottenCheck[i] = false;
    }
}

let ans = 0;

for(let i = 1 ; i < rottenCheck.length ; i++){
    if(!rottenCheck[i]) continue;

    const sickable = eats.filter(eat=>eat[1] === i);

    const medicines = [];

    for(const [personAte] of sickable){
        if(!medicines.includes(personAte)) medicines.push(personAte)
    }

    ans = ans > medicines.length ? ans : medicines.length
}

console.log(ans)