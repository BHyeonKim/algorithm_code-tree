const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const coordinates = input.slice(1).map(line=>line.split(' ').map(Number));

let ans = 40000 * 40000;

for(let i = 0 ; i < coordinates.length ; i++){
    const filtered = coordinates.filter((_,index)=> index !== i)

    const xCords = filtered.map(coord=>coord[0]);
    const yCords = filtered.map(coord=>coord[1]);

    const area = Math.abs(Math.max(...xCords) - Math.min(...xCords)) * Math.abs(Math.max(...yCords) - Math.min(...yCords))

    ans = ans > area ? area : ans
}

console.log(ans)