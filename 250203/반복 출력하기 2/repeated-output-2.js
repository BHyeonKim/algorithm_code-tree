const fs = require('fs')

const N = +fs.readFileSync(0).toString().trim()

let ans = ''


recursiveHello(0);

console.log(ans.trim())

function recursiveHello(depth){
    if(depth === N) return

    ans += 'HelloWorld\n'

    recursiveHello(depth+1);
}