const fs = require('fs')

const N = +fs.readFileSync(0).toString().trim()

let ans = ''


recursiveAsc(0);
ans += '\n';
recursiveDesc(N)

console.log(ans)


function recursiveAsc(depth){
    if(depth === N) return

    ans += String(depth+1) + ' ';

    recursiveAsc(depth+1);
}

function recursiveDesc(depth){
    if(depth < 1) return;

    ans += depth + ' ';

    recursiveDesc(depth-1);
}
