const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.trim());

const [N, Q] = input[0].split(' ').map(Number);
const points = input.slice(1, N+1).map(line=>line.split(' ').map(Number));
const squares = input.slice(N+1).map(line=>line.split(' ').map(Number));

const xCoords = [...new Set(points.map(p => p[0]))].sort((a,b) => a-b);
const yCoords = [...new Set(points.map(p => p[1]))].sort((a,b) => a-b);

const xMap = new Map(xCoords.map((x, i) => [x, i+1]));
const yMap = new Map(yCoords.map((y, i) => [y, i+1]));

const compressedPoints = points.map(([x, y]) => [xMap.get(x), yMap.get(y)]);

function lowerBound(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left + 1;
}

function upperBound(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) left = mid + 1;
        else right = mid;
    }
    return left;
}

let ans = '';

for(const [x1, y1, x2, y2] of squares){
    const compressedX1 = lowerBound(xCoords, x1);
    const compressedX2 = upperBound(xCoords, x2);
    const compressedY1 = lowerBound(yCoords, y1);
    const compressedY2 = upperBound(yCoords, y2);

    let count = 0;
    for(const [cX, cY] of compressedPoints){
        if(compressedX1 <= cX && cX <= compressedX2 &&
            compressedY1 <= cY && cY <= compressedY2){
            count++;
        }
    }

    ans += count + '\n';
}

console.log(ans.trim());