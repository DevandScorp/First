## 1:

массив по умолчанию приводится к строке простым присоединением всех значений с запятыми между ними.

Массивы с одинаковым содержимым не будут равны:

```
var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
a==c;//true
a==b;//false;
b==c;//true;
```
## 2:Сравнение переменных

```
var a = 41;
var b = "42";
var c = "43";
a < b; // true
b < c; // true

```


Что здесь происходит? В разделе 11.8.5 спецификации ES5 говорится, что если оба значения
в сравнении < являются строками, как это было в случае с b < c, сравнение производится
лексикографически (т.е. в алфавитном порядке, как в словаре). но если одно или оба значения
не являются строкой, как в случае с a < b, то оба значения приводятся к числу и происходит
типичное числовое сравнение.
Самое большое затруднение, в которое вы можете попасть со сравнениями между
потенциально разными типами значений (помните, что нет формы "строгого неравенства"?)
— это когда одно из значений не может быть превращено в корректное число, например:

```
var a = 42;
var b = "foo";
a < b; // false
a > b; // false
a == b; // false

```
Подождите-ка, как это все эти три сравнения могут быть false? Так как значение b
приводится к "некорректному числовому значению" NaN в сравнениях < и >, а спецификация
говорит, что NaN не больше и не меньше чем любое другое значение.

## 3:Переменная let

В дополнение к созданию объявлений переменных на уровне функций, ES6 позволяет вам
объявлять переменные, принадлежащие отдельным блокам (пара { .. }), используя
ключевое слово let. Кроме некоторых едва уловимых деталей, правила области видимости
будут вести себя точно также, как мы видели в функциях:

```
function foo() {
var a = 1;
if (a >= 1) {
let b = 2;
while (b < 5) {
let c = b * 2;
b++;
console.log( a + c );
}
}
}
foo();
// 5 7 9

```

## 4: Use strict
```
function foo() {
"use strict";
// этот код в строгом режиме
function bar() {
// этот код в строгом режиме
}
}
// этот код в нестрогом режиме
Сравните с:
"use strict";
function foo() {
// этот код в строгом режиме
function bar() {
// этот код в строгом режиме
}
}
// этот код в строгом режиме

```
## 5: Blocks

В циклах локальные переменные в js нихрена не локальные(не считая let)
```
for(var i = 0;i<10;++i){
//если будет let,то вне цикла i не будет видна!!!
}
console.log(i);//10

```
А вот в блоках try-catch все работает нормально

```
try{
  undefined();//нелегальная операция,чтобы вызвать исключение
}catch(err){
  console.log(err);//заработает
}
console.log(err);//ReferenceError: 'err' not found;
```