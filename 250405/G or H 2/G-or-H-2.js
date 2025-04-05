const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const people = input.slice(1).map(line=>line.split(' ').map((val,idx)=>idx===0?+val:val)).sort((a,b)=>a[0]-b[0]);

let ans = 0;

for(let i = 0 ; i < people.length - 1 ; i++){
    for(let j = i+1 ; j < people.length ; j++){
        let g = 0, h = 0;

        for(let k = i ; k <= j ; k++){
            if(people[k][1] === 'G'){
                g++;
            }else{
                h++;
            }
        }

        if(g === h || !g || !h){
            const length = people[j][0] - people[i][0];
            ans = ans > length ? ans : length
        }
    }
}

console.log(ans)