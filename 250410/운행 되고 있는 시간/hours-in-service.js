const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const emps = input.slice(1).map(line=>line.split(' ').map(Number));

const visited = Array.from({length:1001},()=>false)

let ans = 0;

for(let i = 0 ; i < emps.length ; i++){
    for(let j = 0 ; j < emps.length ; j++){
        if(i===j) continue;
        for(let k = emps[j][0] ; k < emps[j][1] ; k++){
            visited[k] = true;
        }
    }
    let count = 0;

    for(let j = 0 ; j < visited.length ; j++){
        if(visited[j]) count++;
    }

    ans = ans > count ? ans : count;

    for(let j = 0 ; j < visited.length ; j++){
        if(visited[j]) visited[j] = false;
    }
}

console.log(ans)