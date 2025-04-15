const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [NUM_OF_STUDENT, BUDGET] = input[0].split(' ').map(Number);

const demands = input.slice(1).map(line=>line.split(' ').map(Number)).sort((a,b)=>((a[0]+a[1])-(b[0]+b[1])));

let ans = 0;

for(let halfPriceIndex = 0 ; halfPriceIndex < NUM_OF_STUDENT ; halfPriceIndex++){
    let budget = BUDGET;
    let numOfGift = 0;

    const newDemands = [...demands];
    newDemands[halfPriceIndex] = [newDemands[halfPriceIndex][0]/2,newDemands[halfPriceIndex][1]]
    newDemands.sort((a,b)=>((a[0]+a[1])-(b[0]+b[1])))


    for(let i = 0 ; i < NUM_OF_STUDENT - 1 ; i++){
        const [giftPrice, shipPrice] = newDemands[i];

        budget -= giftPrice+shipPrice;

        if(budget < 0) break;

        numOfGift++;
    }

    ans = ans > numOfGift ? ans : numOfGift
}

console.log(ans)