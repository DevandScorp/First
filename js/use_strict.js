/**
 * В js есть так называемый строгий режим.У языка есть фичаЮчто если переменная не объявелна,то она автоматически создается глобально
 */
a = 1;
console.log(a);
/**
 * Все будет работать.Но она будет глобальной,что не всегда есть хорошо.
 *
 */
function b(){
  "use strict";
  // c; вылетит exception
  // console.log(c);
    var c;
    c = 'hello';
    console.log(c);
}
b();
(function () {
    console.log('Функция,которая выполняется сразу же при созданиии');
})();
/**
 * Интересный пример использования модуля
 */
function User(){
    var username,password;
    function doLogin(user,psw){
        username = user;
        password = psw;
    }
    var publicAPI = {
        login:doLogin
    };
    return publicAPI;
}
var fred = User();
fred.login('artem','hello');