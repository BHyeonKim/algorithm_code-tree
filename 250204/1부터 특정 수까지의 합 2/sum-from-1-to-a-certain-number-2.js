const fs = require('fs')

const N = +fs.readFileSync(0).toString().trim();


console.log(recursive(1,0))

function recursive(depth, result){
    if(depth === N+1){
        return result;
    }

    return recursive(depth+1,result+depth)
}