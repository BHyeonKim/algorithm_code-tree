const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [NUM_OF_ALPHABET, A, B] = input[0].split(' ').map(Number)

const arr = Array.from({length:1001}, ()=> '')

for(let i = 1 ; i < input.length ; i++){
    const [char, position] = input[i].split(' ');
    arr[+position] = char;
}

let ans = 0;

for(let x = A ; x <= B ; x++){
    let offsetS = 0;
    let offsetN = 0;

    while(true){
        const negativePosition = x - offsetS;
        const positivePosition = x + offsetS
        
        if(negativePosition >= A && arr[negativePosition] === 'S') break;
        else if(positivePosition <= B && arr[positivePosition] === 'S') break;

        offsetS++;
    }

     while(true){
        const negativePosition = x - offsetN;
        const positivePosition = x + offsetN
        
        if(negativePosition >= A && arr[negativePosition] === 'N') break;
        else if(positivePosition <= B && arr[positivePosition] === 'N') break;

        offsetN++;
    }

    if(offsetS <= offsetN) ans++;
}

console.log(ans)

