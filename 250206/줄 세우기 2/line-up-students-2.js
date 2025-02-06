const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n');

const persons = input.slice(1);
const arr = []
let ans = ''
class Person{
    number;
    height;
    weight;

    constructor(num,he,we){
        this.height = he;
        this.number = num;
        this.weight = we;
    }
}


for(let i = 0 ; i < persons.length ; i++){
    const [height, weight] = persons[i].split(' ').map(Number);
    arr.push(new Person(i+1,height,weight));
}

arr.sort((a,b)=> {
                    if(a.height !== b.height){
                        return a.height - b.height;
                    }else{
                        return b.weight - a.weight;
                      
                    }
                 }
        )

for(let i = 0 ; i < arr.length ; i++){
    const person = arr[i]
    ans += `${person.height} ${person.weight} ${person.number}\n`
}

console.log(ans.trim())