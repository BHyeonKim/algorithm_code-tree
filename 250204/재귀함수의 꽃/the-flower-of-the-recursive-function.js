const fs = require('fs')

const N = +fs.readFileSync(0).toString().trim()

let ans = '';

recursive(5)

console.log(ans);

function recursive(depth, direction = 'D'){

    if(depth === N+1 && direction === 'U'){
        return;
    }

    ans += String(depth+' ');

    if(direction === 'D'){
        if(depth === 1){
            recursive(1,'U')
        }else{
            recursive(depth-1, 'D')
        }
    }else{
        recursive(depth+1, 'U');
    }
}