const fs = require('fs')

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const history = input.slice(1).map(line=>line.trim().split(' '));

const map = new Map();

for(const [name, access] of history){
  if(access === 'enter'){
    map.set(name,true)
  }else{
    map.delete(name)
  }
}


let ans = []

for(const [key, value] of map){
  ans.push(key)
}

console.log(ans.sort().reverse().join('\n'))