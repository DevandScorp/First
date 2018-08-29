function foo() {
    console.log(this.a);
}
var a = 4;

function foo_1(){
    "use strict";
    console.log(this.a);//undefined.Т.е строгий режим влияет не только на глобальные переменные,но еще и на сам объект global
}
foo();

console.log("Заковырка");
function f(){
    console.log(this.a);
}
var obj = {
    a: 2,
    f: f
}
obj.f();//2
var bar = obj.f;//ссылка на функцию.Но при этом функция не сохранит текущий this  и поэтому вернется глобальный this
bar();//4