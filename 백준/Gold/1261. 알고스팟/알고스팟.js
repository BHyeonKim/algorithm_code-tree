const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const [M, N] = input[0].split(' ').map(Number)

const map = input.slice(1);

const delta = [[-1,0],[0,1],[1,0],[0,-1]]
const visited = Array.from({length:N},()=>Array.from({length:M}),()=>false);


class WallHeap{
  #heap;

  constructor(){
    this.#heap = [null]
  }

  push(item){
    this.#heap.push(item)
    this.bubbleUp()
  }

  poll(){
    if(!this.length) return null;

    const item = this.#heap[1];

    this.#heap[1] = this.#heap.pop();
    this.bubbleDown()

    return item;
  }


  bubbleUp(){
    let index = this.#heap.length - 1;
    let parentIndex = Math.floor(index/2)

    while(this.#heap[index] && this.#heap[parentIndex] && this.#heap[index].wall < this.#heap[parentIndex].wall){
      this.swap(index, parentIndex)

      index = parentIndex;
      parentIndex = Math.floor(index/2)
    }
  }

  bubbleDown(){
    let index = 1;
    let leftIndex = index * 2
    let rightIndex = (index * 2) + 1

    while((this.#heap[index] && this.#heap[leftIndex] && this.#heap[index].wall > this.#heap[leftIndex].wall) || (this.#heap[index] && this.#heap[rightIndex] && this.#heap[index].wall > this.#heap[rightIndex].wall)){

      let smallerIndex = index;

      if(this.#heap[smallerIndex] && this.#heap[leftIndex] && this.#heap[smallerIndex].wall > this.#heap[leftIndex].wall){
        smallerIndex = leftIndex
      }

      if(this.#heap[smallerIndex] && this.#heap[rightIndex] && this.#heap[smallerIndex].wall > this.#heap[rightIndex].wall){
        smallerIndex = rightIndex
      }
     
      this.swap(index, smallerIndex);

      index = smallerIndex;
      leftIndex = index * 2;
      rightIndex = (index * 2) + 1;
    }
  }

  swap(index1, index2){
    [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
  }

  get length(){
    return this.#heap.length - 1;
  }
}


const pq = new WallHeap()
pq.push({r:0,c:0,wall:0})
visited[0][0] = true

while(pq.length){
  const {r, c, wall} = pq.poll()

  if(r === N - 1 && c === M - 1){
    console.log(wall)
    break;
  }

  for(const d of delta){
    const nr = r + d[0];
    const nc = c + d[1];

    if(nr < 0 || nr >= N || nc < 0 || nc >= M || visited[nr][nc]) continue;

    const isWall = map[nr][nc] === '1'

    visited[nr][nc] = true
    pq.push({r:nr, c:nc, wall: wall + (isWall ? 1 : 0)})
  }
}