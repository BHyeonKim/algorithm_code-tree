const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [NUM_OF_PERSON, NUM_OF_MESSAGE, MESSAGE_NUMBER] = input[0].split(' ').map(Number);
const messages = input.slice(1).map(line => line.split(' ').map((item,index)=>index === 1 ? Number(item) : item));

const map = new Map();

for(let charcode = 65 ; charcode < 65 + NUM_OF_PERSON ; charcode++){
    map.set(String.fromCharCode(charcode), false)
}


for(let i = MESSAGE_NUMBER - 1 ; i < NUM_OF_MESSAGE ; i++){
    const [person] = messages[i];

    map.set(person, true);
}

let ans = ''

for(let i = MESSAGE_NUMBER - 2  ; i >= 0 ; i--){
    const [person, unread] = messages[i]
    if(unread === messages[MESSAGE_NUMBER - 1][1]){
        map.set(person, true)
    }
}


for(const [key,value] of map.entries()){
    if(!value){
        ans += key + ' '
    }
}

if(MESSAGE_NUMBER === 1){
    return;
}else{
    console.log(ans.trim())
}