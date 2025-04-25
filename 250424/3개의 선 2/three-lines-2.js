const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0]

const points = input.slice(1).map(line=>line.split(' ').map(Number));

const visited = Array(N).fill(false)

let isAnswerExists = false;

visitLine(0, 0, 0)

function visitLine(next, numOfUsedLine, numOfVisitedNode){
    if(isAnswerExists) return;

    if(numOfUsedLine > 3) return;

    if(numOfVisitedNode === points.length){
        isAnswerExists = true;
        return;
    }

    if(next === points.length){
        return
    }

    for(let i = next ; i < points.length ; i++){
        // 이미 처리된 점이면 생략
        if(visited[i]) continue;

        const [x, y] = points[i];
        // 세로 기준 삭제

        let visitLocal = []

        for(let j = next + 1 ; j < points.length ; j++){
            if(visited[j]) continue;

            if(y === points[j][1]){
                visited[j] = true;
                visitLocal.push(j)
            }
        }

        visitLine(next + 1, numOfUsedLine + 1, numOfVisitedNode + visitLocal.length + 1);

        for(let visitedNode of visitLocal){
            visited[visitedNode] = false;
        }



        // 가로 기준 삭제

        visitLocal = []

        for(let j = next + 1 ; j < points.length ; j++){
            if(visited[j]) continue;

            if(x === points[j][0]){
                visited[j] = true;
                visitLocal.push(j)
            }
        }

        visitLine(next + 1, numOfUsedLine + 1, numOfVisitedNode + visitLocal.length + 1);

        for(let visitedNode of visitLocal){
            visited[visitedNode] = false;
        }
    }
}

console.log(isAnswerExists ? 1 : 0)