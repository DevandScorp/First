var c = prompt("Enter c");
console.log(c);
function one(c){
    var d = 'world';
    if(c){
        /**
         * Самое интересное,что если вставить d внутри блока if,то
         * будет та же самая херня,что и с let
         */
        /**
         * Тут все норм
         * @type {string}
         */
        let b = 'hello';
        console.log(b + ' ' + d);

        return true;
    }
    else{
        /**
         * Тут выведется undefined,т.к. let объявляется в одних скобках,а не во всей функции
         */
        console.log(b);
        console.log(d);

        return false;
    }
}
var b = one(c);
console.log(b);
