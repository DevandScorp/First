// const animal = {
//     eats: true
// }
function Animal(age){
    this.age = age;
}
Animal.prototype.getName = function(){
    return this.age;
}
function Rabbit(name,age){
    Animal.call(this,age);
    this.name = name;
}
// Rabbit.prototype = Object.create(Animal.prototype);
Object.setPrototypeOf(Rabbit.prototype,Animal.prototype);//ES6+
const rabbit = new Rabbit("Король",15);//new говорит установить __proto__ значение ссылки Rabbit.prototype
//https://learn.javascript.ru/new-prototype
console.log(rabbit.name,rabbit.age);
console.log(rabbit.getName());