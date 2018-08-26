/**
 * в js функции,массивы и все объекты относятся к object
 */
var a = {
        name: "Artem",
        age: 17,
        isStudent: true
};
console.log(typeof a);//object
console.log(typeof a.name);//string
console.log(typeof a["name"]);//string
/**
 * Массив-это по сути объект с числовыми ключами и скобки другие
 */
var arr = ["Artem","hello",1,true];
for(var i = 0;i<arr.length;++i){
    console.log(arr[i]);
}
/**
 * Функция-это тоже объект!!!!!Смотри,какая фича
 */
function f(){
    console.log("Hello,function");
}
f.bar = "this is function argument";
f();/**эТО ВЫЗОВ ФУНКЦИИ,НО НИКАК НЕ ПЕРЕМЕННАЯ.*/
console.log(typeof f);//function
console.log(typeof f.bar);//string
console.log(typeof f());/**Функция отработает и выведется undefined*/
