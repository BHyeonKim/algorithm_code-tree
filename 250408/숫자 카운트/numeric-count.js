const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0]

const cases = input.slice(1).map(line=>line.split(' ').map(Number))

let ans = 0;

for(let i = 1 ; i <= 9 ; i++){
    for(let j = 1 ; j <= 9 ; j++){
        for(let k = 1 ; k <= 9 ; k++){
            let count = 0;
            for(const [guess, oneCount, twoCount] of cases){
                let oSum = 0;
                let tSum = 0;

                const hundred = Math.floor(guess/100);
                const ten = Math.floor((guess - hundred*100)/10);
                const one = guess - hundred*100 - ten*10;

                
                if(i === one){
                    oSum++
                }else if(i === ten || i === hundred){
                    tSum++
                }

                if(j === ten){
                    oSum++
                }else if(j === one || j === hundred){
                    tSum++
                }

                if(k === hundred){
                    oSum++
                }else if(k === one || k === ten){
                    tSum++
                }

                if(oSum === oneCount && tSum === twoCount){
                    count++
                }
                
            }

            if(count === cases.length) ans++;
        }
    }
}

console.log(ans)