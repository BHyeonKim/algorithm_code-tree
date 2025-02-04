const fs = require('fs')

const N = +fs.readFileSync(0).toString().trim()

let ans = ''


starRecursive(1);

console.log(ans);

function starRecursive(depth){
    if(depth === N+1){
        return
    }
    
    for(let i=0 ; i < depth ; i++){
        ans += '*'
    }

    ans += '\n';

    starRecursive(depth+1);
}