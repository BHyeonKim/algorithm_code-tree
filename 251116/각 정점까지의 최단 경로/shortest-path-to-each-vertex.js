const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const K = Number(input[1]);
const edges = input.slice(2).map(line => line.split(' ').map(Number));

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyUp() {
        let idx = this.size() - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx].dist <= this.heap[idx].dist) break;

            this.swap(parentIdx, idx);
            idx = parentIdx;
        }
    }

    heapifyDown() {
        let idx = 0;
        while (idx * 2 + 1 < this.size()) {
            let smallerIdx = idx * 2 + 1;
            const rightIdx = idx * 2 + 2;

            if (rightIdx < this.size() &&
                this.heap[rightIdx].dist < this.heap[smallerIdx].dist) {
                smallerIdx = rightIdx;
            }

            if (this.heap[idx].dist <= this.heap[smallerIdx].dist) break;

            this.swap(idx, smallerIdx);
            idx = smallerIdx;
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

const dp = Array(N+1).fill(Infinity);
const graph = Array.from({length: N+1}, () => []);

for(const [start, end, dist] of edges){
    graph[start].push({next: end, dist});
    graph[end].push({next: start, dist});
}

dp[K] = 0;

const pq = new MinHeap();
pq.push({node: K, dist: 0});

while(pq.size() > 0) {
    const {node, dist} = pq.pop();

    if(dist > dp[node]) continue;

    for(const {next, dist: edgeDist} of graph[node]) {
        const newDist = dist + edgeDist;

        if(newDist < dp[next]) {
            dp[next] = newDist;
            pq.push({node: next, dist: newDist});
        }
    }
}

let ans = '';

for(let i = 1; i <= N; i++) {
    ans += (dp[i] === Infinity ? '-1' : dp[i]) + '\n';
}

console.log(ans);