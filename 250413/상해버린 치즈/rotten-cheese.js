const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line=>line.split(' ').map(Number));

const [N, M, D, S] = input[0]

let eats = input.slice(1,1+D);
const sicks = input.slice(1+D);

// 사람마다 먹은 상할 수 있는 빵들
const rottens = Array.from({length:N+1},()=>[]);


for(const [personSick, sickTime] of sicks){
    for(const [personAte, cheese, eatTime] of eats){
        if(personSick !== personAte) continue;

        if(sickTime <= eatTime) continue;

        rottens[personAte].push(cheese)
    }
}


const personHasBeenSick = rottens.filter(rotten=>rotten.length).length;
const common = []

for(let i = 1 ; i <= M ; i++){
    let count = 0;
    for(const rotten of rottens){
        if(rotten.includes(i)) count++;
    }

    if(count === personHasBeenSick) common.push(i);
}


let ans = 0;

for(const cheese of common){

    const sickable = eats.filter(eat=>eat[1] === cheese);

    const medicines = [];

    for(const [personAte] of sickable){
        if(!medicines.includes(personAte)) medicines.push(personAte)
    }

    ans = ans > medicines.length ? ans : medicines.length
}

console.log(ans)