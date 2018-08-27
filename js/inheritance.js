function User(name,age) {
    this.name = name;
    this.age = age;
    this.go = function(){console.log(this.name + " идет ");}
    this.displayInfo = function(){
        consoole.log("Имя: " + this.name + "; возраст: " + this.age);
    };
}
function Employee(name,age,comp){
    User.call(this,name,age);//мы применили конструктор User к этому объекту
    this.company = comp;
    this.displayInfo = function(){
        consoole.log("Имя: " + this.name + "; возраст: " + this.age + "; компания: " + this.company);
    };
}
/**По сути,мы импортируем и прототип User'a */
Employee.prototype = Object.create(user.prototype);
var tom = new User("Том", 26);
var bill = new Employee("Билл", 32, "Google");
tom.go();
bill.go();
tom.displayInfo();
bill.displayInfo();
console.log(bill.maxage);