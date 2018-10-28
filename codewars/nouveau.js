function Person (name) {
    this.name = name;
}
Person.prototype.sayHi = function () {
    return 'Hi, I am ' + this.name;
};
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
function nouveau (Constructor,...args) {
    if(typeof Constructor(...args)!=='undefined'){
        if(typeof Constructor(...args)!=='function')return this;
        return Constructor(...args);
    }
    // let constructor = Object.assign({},Constructor);
    // constructor.__proto__ = Constructor.prototype;
    // Constructor.call(constructor,...args);
    // console.log(typeof constructor);
    // return constructor;
    const obj = Object.create(Constructor);
    obj.__proto__ = Constructor.prototype;
    Constructor.call(obj,...args);
    return obj;
}
var guy = nouveau(Person, 'Guy');
console.log(typeof guy=='function');
console.log(guy.name, 'Guy');
console.log(guy.sayHi(), 'Hi, I am Guy');
function Fnc(){ return Fnc; }
var guy = nouveau(Fnc);
console.log(guy);
function Str(){ return 's'; }
var guy = nouveau(Str);
console.log(guy);