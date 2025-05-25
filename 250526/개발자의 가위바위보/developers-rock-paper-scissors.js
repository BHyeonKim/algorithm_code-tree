const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(line => line.split(" ").map(Number));


const card = ['가위', '바위', '보']

let ans = 0;

for(let i = 0 ; i < 3 ; i++){
    for(let j = 0 ; j < 3 ; j++){
        if(i === j) continue;

        const map = new Map()
        const a = card[i];
        const b = card[j];
        const [c] = card.filter(value=>value !== a && value !==b)
        
        map.set(1,a)
        map.set(2,b)
        map.set(3,c)

        let wonA = 0;
        let wonB = 0;

        for(const [aVal, bVal] of arr){
            const cardA = map.get(aVal);
            const cardB = map.get(bVal);

            wonA += isWin(cardA,cardB) ? 1 : 0;
            wonB += isWin(cardB,cardA) ? 1 : 0;
        }

        if(wonA > wonB) ans = Math.max(ans, wonA);
    }
}

console.log(ans)


function isWin(a,b){
    if(a === '가위' && b === '보'){
        return true;
    }else if(a === '보' && b === '바위'){
        return true;
    }else if(a === '바위' && b === '가위'){
        return true;
    }

    return false;
}