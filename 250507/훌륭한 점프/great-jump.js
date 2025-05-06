const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const stones = input[1].split(' ').map(Number);

const visited = Array(N + 1).fill(Infinity); 
visited[0] = stones[0];

const queue = [[0, stones[0]]];

while (queue.length) {
    const [current, maxVal] = queue.shift();

    for (let next = current + 1; next <= Math.min(current + K, N - 1); next++) {
        const nextMax = Math.max(maxVal, stones[next]);
        if (visited[next] > nextMax) {
            visited[next] = nextMax;
            queue.push([next, nextMax]);
        }
    }
}

console.log(visited[N - 1]);
