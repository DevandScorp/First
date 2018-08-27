class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(this.name," ",this.age);
    }
    static toUpper(person){
        return person.name.toUpperCase();
    }
}
class Empoyee extends Person{
    constructor(name,age,company){
        super(name,age);
        this.company = company;
    }
    display(){
        super.display();
        console.log("Employee in ",this.company);
    }
    work(){
        console.log(this.name," is hard working");
    }
}
var tom = new Person('Tom',17);
var artem = new Empoyee('Artem',17,"Google");
tom.display();
artem.display();
artem.work();
console.log(Person.toUpper(tom));
console.log(Person.toUpper(artem));