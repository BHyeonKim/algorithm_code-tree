const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K] = input[0].trim().split(' ').map(Number);
const grid = input.slice(1, 1 + N).map(line => line.trim().split(' ').map(Number));

grid.unshift([]);

for(let i = 1 ; i < grid.length ; i++){
    grid[0].unshift(0)
}

for(let i = 0 ; i < grid.length ; i++){
    grid[i].unshift(0)
}

const sum = Array.from({length: N+1},()=>Array.from({length: N+1},()=>0));

for(let i = 1 ; i <= N ; i++){
    for(let j = 1 ; j <= N ; j++){
        sum[i][j] = grid[i][j] + sum[i][j-1]
    }
}

for(let j = 1 ; j <= N ; j++){
    for(let i = 1 ; i <= N ; i++){
        sum[i][j] = sum[i][j] + sum[i-1][j]
    }
}


let ans = 0;

for(let i = 0 ; i + K < N+1 ; i++){
    for(let j = 0 ; j + K < N+1 ; j++){
        ans = Math.max(ans, sum[i+K][j+K] - (sum[i+K][j] + sum[i][j+K] - sum[i][j]))
    }
}

console.log(ans)