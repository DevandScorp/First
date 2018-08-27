var user = {
    name: "Tom",
    age:26,
    display: function () {
        console.log(this.name + " " + this.age);

    },
    /**
     * Можно использовать и такой вариант определения функций
     * @param place
     */
    move(place){
        console.log(this.name + ' goes to ' + place);
    }

}
user.display();
user.move('shop');
delete user.name;//delete user["name"]
console.log(user.name);//undefined
//проверка на наличие полей
var hasAge = "age" in user;//альтернатива - user.hasOwnProperty('name');
console.log(hasAge);
var hasProp = "prop" in user;
user.name = "Artem";
console.log(hasProp);
for(var key in user){
    console.log(key + ": " + user[key]);
}
function User(pName,pAge){
    this.age = pAge;
    this.name = pName;
    this.display = function(){
        console.log(this.name + " " + this.age);
    }
}
User.prototype.maxAge = 110;//аналогично с функциями.Это так называемые прототипы
//как статические поля и методы
var user_2 = new User("Artem",14);
user_2.display();
console.log(user_2.maxAge);

var user_3 = new User("Artem",14);
console.log(user_3.maxAge);
user_3.display();
