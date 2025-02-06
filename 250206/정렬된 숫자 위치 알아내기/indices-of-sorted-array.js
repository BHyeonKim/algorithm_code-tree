const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const N = +input[0]
const numbers = input[1].trim().split(' ').map(Number)

class MyNumber{
    _value
    _currentPos
    _nextPos

    constructor(value,currentPos,nextPos = 0){
        this._value = value;
        this._currentPos = currentPos;
        this._nextPos = nextPos;
    }
}

const arr = [];

let ans = ''

for(let i = 0 ; i < numbers.length ; i++){
    arr.push(new MyNumber(numbers[i], i+1));
}

arr.sort((a,b)=>{
    if(a._value !== b._value){
        return a._value - b._value;
    }else{
        return a.currentPos - b._currentPos
    }
})

for(let i = 0 ; i < arr.length ; i++){
    arr[i]._nextPos = i+1;
}

arr.sort((a,b)=> a._currentPos - b._currentPos)

for(let i = 0 ; i < arr.length ; i++){
    ans += arr[i]._nextPos + ' '
}

console.log(ans.trim())


