const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(line=>line.split(' '));

const n = Number(input[0]);


const map = new Map();


for(const [direction, key, value] of input){
    switch(direction){
        case 'add':
            add(map, key, value);
            break;
        case 'find':
            console.log(find(map, key));
            break;
        case 'remove':
            remove(map, key);
            break;
    }
}

function add(map ,key, value){
    map.set(key, value);
}

function remove(map, key){
    map.delete(key);
}

function find(map, key){
    return map.get(key) || 'None';
}

