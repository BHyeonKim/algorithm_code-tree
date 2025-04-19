const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [_, A, B] = input[0].split(' ').map(Number);

const arr = Array.from({ length: 1001 }, () => '');

for (let i = 1; i < input.length; i++) {
    const [char, position] = input[i].split(' ');
    arr[+position] = char;
}

let ans = 0;

for (let x = A; x <= B; x++) {
    let offsetS = 0;
    let offsetN = 0;
    let foundS = false;
    let foundN = false;

    while ((x - offsetS >= 1 || x + offsetS <= 1000)) {
        const negativePosition = x - offsetS;
        const positivePosition = x + offsetS;

        if (negativePosition >= 1 && arr[negativePosition] === 'S') {
            foundS = true;
            break;
        }
        if (positivePosition <= 1000 && arr[positivePosition] === 'S') {
            foundS = true;
            break;
        }

        offsetS++;
    }

    while ((x - offsetN >= 1 || x + offsetN <= 1000)) {
        const negativePosition = x - offsetN;
        const positivePosition = x + offsetN;

        if (negativePosition >= 1 && arr[negativePosition] === 'N') {
            foundN = true;
            break;
        }
        if (positivePosition <= 1000 && arr[positivePosition] === 'N') {
            foundN = true;
            break;
        }

        offsetN++;
    }

    if (foundS && foundN && offsetS <= offsetN) {
        ans++;
    }
}

console.log(ans);
