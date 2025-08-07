const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0]
const blocks = input.slice(1).map(Number)


const average = blocks.reduce((acc,val)=>acc+val,0) / N

const ans = blocks.reduce((acc,val)=> acc + (val > average ? val - average : 0), 0)

console.log(ans)