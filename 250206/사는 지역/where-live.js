const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n');

const info = input.slice(1).map(str=>str.split(' '))
const arr = []


class Person{
    _name
    _addressNo
    _location

    constructor(name,addressNo,location){
        this._name = name;
        this._addressNo = addressNo;
        this._location = location;
    }

    toString(){
        return `name ${this._name}\naddr ${this._addressNo}\ncity ${this._location}`
    }
}


for(const personInfo of info){
    arr.push(new Person(personInfo[0],personInfo[1],personInfo[2]))
}

arr.sort((personA,personB)=>personA-personB)

console.log(arr[arr.length-1].toString());