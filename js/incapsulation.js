/**
 * хера с два в js будет нормальная инкапсуляция.Возможность скрывать данные через локальные переменные-способ создания
 * эффекта инкапсуляции
 */
function User(name,age) {
    this.name = name;
    var _age = age;
    this.display = function () {
        console.log("Имя: " + this.name + "; возраст: " + _age);
    }
    this.getAge = function () {
       return _age;
    }
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}
var user = new User('Artem',15);
console.log(user._age);//undefined
console.log(user.getAge());
user.setAge(17);
console.log(user.getAge());
