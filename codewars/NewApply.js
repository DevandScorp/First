function Greeting(name) {
    this.name = name;
}

Greeting.prototype.sayHello = function() {
    return "Hello " + this.name;
};


Greeting.prototype.sayBye = function() {
    return "Bye " + this.name;
};
function construct(Class,...args) {
   // obj.name = name;
    return Object.create(Class,...args);
}
var greeting = construct(Greeting, 'John');
console.log(greeting.name);
console.log( greeting instanceof Greeting);
console.log( greeting.__proto__);
console.log( typeof greeting );