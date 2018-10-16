function Person (name) {
    this.name = name;
}
Person.prototype.sayHi = function () {
    return 'Hi, I am ' + this.name;
};
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
function nouveau (Constructor,...args) {

    return Constructor.construct(...args);
    // return Constructor.call(null,...args);

}
var guy = nouveau(Person, 'Guy');
console.log(Person.prototype==guy.prototype);
console.log(typeof guy);
console.log(guy.name, 'Guy');
console.log(guy.sayHi);
// console.log(guy.sayHi(), 'Hi, I am Guy');