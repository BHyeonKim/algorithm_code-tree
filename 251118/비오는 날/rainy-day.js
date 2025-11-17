const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));


console.log(forecasts.filter(forecase=>forecase[2] === 'Rain').sort((a,b)=>a[0]-b[0])[0].join(' '));