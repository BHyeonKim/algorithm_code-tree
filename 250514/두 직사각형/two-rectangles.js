const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

// (x1,y1).   (x2, y2)           (a1, b1).   (a2, b2)
//
//
// (x1,y2).   (x2, y2)           (a1, b2).   (a2, b2)


if(x1 <= a2 && y1 <= b2 ||  a1 <= x2 && b1 <= y2 || x2 >= a1 && y2 <= b2 || x1 <= a2 && b2 <= y2){
    console.log('overlapping')
}else{
    console.log(nonoverlapping)
}