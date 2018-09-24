/**
 * 'use strict';

 let user = {
  name: "Вася",
  age: 30,
  [Symbol.for("isAdmin")]: true
};

 // в цикле for..in также не будет символа
 alert( Object.keys(user) ); // name, age

 // доступ к свойству через глобальный символ — работает
 alert( user[Symbol.for("isAdmin")] );
 * @param propertyName
 * @returns {symbol}
 */

const createNotEnumerableProperty = (propertyName) => {
    return Symbol(propertyName);
};
const propertyName = 'property';
const propertyValue = 'value';

const property = createNotEnumerableProperty(propertyName);
const object = {};

object[property] = propertyValue;

console.log(Object.keys(object).length===0);
console.log(object[property]===propertyValue);