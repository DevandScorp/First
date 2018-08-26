var people = ["Tom","Alice","Mark"];
people.push('Nikita');
console.log(...people);
/**
 * В js можно определять новые элементы массивов
 */
console.log(people[7]);
people[7] = 'Artem';
console.log(people[7]);
console.log(...people);/**
 Вместо пустых будет тупо undefined
 */
var people_1 = [
        ["Tom", 25, false],
        ["Bill", 38, true],
        ["Alice", 21, false]
    ];

console.log(people_1[0]); // ["Tom", 25, false]
console.log(people_1[1]);
/**
 * С булевскими хренями почти как в плюсах,только undefined и null возвращает false
 * Числа по аналогии с плюсами,а строки если непустые-то true;
 */
/**
 * Если будет "",то выведет false
 * Объекты всегда true
 * @type {string}
 */
var m = "hello";
if(m){
    console.log('true');
}
else{
    console.log('false');
}
