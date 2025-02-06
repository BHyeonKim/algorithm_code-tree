const fs = require('fs')

const [secret,place,time] = fs.readFileSync(0).toString().trim().split(' ');

class MyClass{
    _s;
    _p;
    _t;


    constructor(s,p,t){
        this._s = s;
        this._p = p;
        this._t = t;
    }


    toString(){
        return `secret code : ${this._s}\nmeeting point : ${this._p}\ntime : ${this._t}`
    }
}

const myClass = new MyClass(secret,place,time);

console.log(myClass.toString())