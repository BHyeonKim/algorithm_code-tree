const fs = require('fs')
const string = fs.readFileSync(0).toString().trim()

console.log(string.split('').sort().join(''));