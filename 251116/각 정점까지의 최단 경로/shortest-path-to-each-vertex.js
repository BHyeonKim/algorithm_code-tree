const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const K = Number(input[1]);
const edges = input.slice(2).map(line => line.split(' ').map(Number));


const dp = Array(N+1).fill(Infinity)
const graph = Array.from({length:N+1},()=>[])

for(const [start, end, dist] of edges){
    graph[start].push({next:end, dist})
    graph[end].push({next:start, dist})
}

dp[K] = 0;



const queue = [{node: K, dist : 0}]

while(queue.length){
    queue.sort((a,b)=>a.dist-b.dist)
    const {node, dist} = queue.shift()

    if(dist > dp[node]) continue;

    for(const {next, dist: edgeDist} of graph[node]) {
        const newDist = dist + edgeDist;

        if(newDist < dp[next]) {
            dp[next] = newDist;
            queue.push({node: next, dist: newDist});
        }
    }
}

let ans = ''

for(let i = 1; i <= N; i++) {
    ans += (dp[i] === Infinity ? '-1' : dp[i]) + '\n';
}

console.log(ans)