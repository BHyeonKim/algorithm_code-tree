const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.trim());

const [N, Q] = input[0].split(' ').map(Number);
const points = input.slice(1, N+1).map(line=>line.split(' ').map(Number));
const squares = input.slice(N+1).map(line=>line.split(' ').map(Number))

const xMap = new Map();
const yMap = new Map();

points.sort((a,b)=>a[0]-b[0])

let idx = 1;

for(const [x] of points){
    xMap.set(x, idx++)
}

points.sort((a,b)=>a[1]-b[1])

idx = 1;

for(const [_,y] of points){
    yMap.set(y, idx++)
}


let ans = ''

for(const [x1,y1, x2, y2] of squares){

    let compressedX1 = Infinity
    let compressedX2 = -Infinity

    for(const [actual, compressed] of xMap.entries()){
        if(x1 <= actual){
            compressedX1 = Math.min(compressedX1, compressed)
        }

        if(x2 >= actual){
            compressedX2 = Math.max(compressedX2, compressed);
        }
    }

    let compressedY1 = Infinity
    let compressedY2 = -Infinity   

    for(const [actual, compressed] of yMap.entries()){
        if(y1 <= actual){
            compressedY1 = Math.min(compressedY1, compressed)
        }

        if(y2 >= actual){
            compressedY2 = Math.max(compressedY2, compressed);
        }
    }


    let count = 0;

    for(const [x, y] of points){
        const cX = xMap.get(x);
        const cY = yMap.get(y);

        if(compressedX1 <= cX && cX <= compressedX2 && compressedY1 <= cY && cY <= compressedY2 ){
            count++
        }
    }

    ans += count + '\n'   
}

console.log(ans.trim())