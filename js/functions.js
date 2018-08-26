function getSum(a,b,c) {
    /**
     * Ты можешь и не указывать значения,но тогда это будет восприниматься как undefined;
     */
    return a+b+c;
}
function getMany(...numbers) {
    var sum = 0;
    for(var index of numbers){
        sum+=index;
    }
    return sum;

}

/**
 * Можно и просто делать функции в качестве параметров(функциональное программирование ее)
 */
console.log("Sum of many: " + getMany(1,2,3,4,5,6,7,8,9,10));
function multiply(x=5,y=10){
    /**
     * Это дефолтные значения.Еще можно чекать на равенство с undefined
     */
    return x*y;
}
console.log("No arguments: " + multiply());//50
console.log("1 argument: " + multiply(3));//30
console.log("2 arguments: " + multiply(3,5));//15
/**
 * Это анонимная функция
 */
var display = function(){
    document.write("Function usage");
}
display();
console.log(getSum(1,2,3));
document.write(getSum(1,2,3));
console.log(getSum());/**выведет NaN*/
/**
 * Еще клевая фишка
 */
var nums = [1,2,3];
console.log(getSum(...nums));
/**__________________________________Сокрытие переменных___________________________________________*/
var z = 10;
function returnZ() {
    /**
     * Локальная переменная перекрывает глобальную
     * @type {number}
     */
    var z = 20;
    return z;

}
console.log(returnZ());