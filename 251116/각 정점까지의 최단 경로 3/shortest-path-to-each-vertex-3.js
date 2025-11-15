const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const edges = input.slice(1, M + 1).map(line => line.split(" ").map(Number));

const dp = Array(N+1).fill(Infinity);
const visited = Array(N+1).fill(false)

dp[1] = 0

const table = Array.from({length:N+1},()=>Array.from({length:N+1},()=>-1))

for(const edge of edges){
    table[edge[0]][edge[1]] = edge[2]
}


for(let i = 1 ; i <= N ; i++){
    let minIndex = -1;

    for(let j = 1 ; j <= N ; j++){
        if(visited[j]) continue;

        if(minIndex === -1 || dp[minIndex] > dp[j]){
            minIndex = j
        }
    }

    visited[minIndex] = true

    for(let j = 1 ; j <= N ; j++){
        if(table[minIndex][j] === -1) continue;

        dp[j] = Math.min(dp[j], dp[minIndex] + table[minIndex][j])
    }
}


let ans = ''

for(let i = 2 ; i <= N ; i++){
    ans += dp[i] === Infinity ? - 1 : dp[i] + '\n'
}

console.log(ans.trim())