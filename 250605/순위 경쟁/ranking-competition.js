const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const changes = input.slice(1).map(e => e.split(" "));

const score = new Map()
let max = 0;

score.set('A',0)
score.set('B',0)
score.set('C',0)

let ans = 0;

let prev = ['A', 'B', 'C'];

for(const [C, S] of changes){
    const prevScore = score.get(C);
    const nextScore = prevScore + Number(S);
    
    score.set(C, nextScore);


    let maxScore = Number.NEGATIVE_INFINITY;
    for(const [_,value] of score.entries()){
        maxScore = Math.max(maxScore, value)
    }

    const honor = []
    for(const [key, value] of score.entries()){
        if(value === maxScore){
            honor.push(key)
        }
    }
    
    if(prev.length !== honor.length){
        ans++
    }else{
        prev.sort()
        honor.sort()

        for(let i = 0 ; i < prev.length ; prev++){
            if(prev[i] !== honor[i]){
                ans++
                break;
            }
        }
    }

    // console.log('prev:',prev, ' honor:', honor,' ans:', ans)
    prev = [...honor]
}
console.log(ans)