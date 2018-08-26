/**
 * Замыкания.Крч в js есть такой стек,куда запихиваются переменные.
 * У функций есть свой отдельный.Если ты создашь вложенную функцию и в внешней функции создашь переменную,то
 * она в функции будет считаться глобальной
 */
function outer() {
    var x = 0;//для каждого экземпляра функции будет своя отельная переменная x.
    //локальная для функции,но глобальная для вложеннцых функций
    function inner(){
        x++;
        console.log(x);
    }
    return inner;
}
var a = outer();
a();//1
a();//2
a();//3
var b = outer();
b();//1
b();//2
function multiply(n){
    var x = n;
    return function (m) {return x*m;}
}

/**
 * Еще одна фишка js-переменные можно перепресваивать и переопределять сколько угожно раз;
 */
var a = multiply(5);
var b = a(4);
console.log(b);

var calculator = (function(){
    var data = { number: 0};

    return {
        sum: function(n){
            data.number += n;
        },
        subtract: function(n){
            data.number -= n;
        },
        display: function(){
            console.log("Result: ", data.number);
        }
    }
})();
calculator.sum(10);
calculator.sum(3);
calculator.display();   // Result: 13
calculator.subtract(4);
calculator.display();