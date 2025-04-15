const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [NUM_OF_STUDENT, BUDGET] = input[0].split(' ').map(Number);

const demands = input.slice(1).map(line=>line.split(' ').map(Number)).sort((a,b)=>((a[0]+a[1])-(b[0]+b[1])));


for(let excludeIndex = 0 ; excludeIndex < NUM_OF_STUDENT ; excludeIndex++){
    let budget = BUDGET;
    let numOfGift = 0;

    const newDemands = [...demands.slice(0, excludeIndex),...demands.slice(excludeIndex+1)];

    console.log(newDemands)
}