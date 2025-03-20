const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');



console.log(`user codetree lv 10\nuser ${user_id} lv ${levelStr}`)
