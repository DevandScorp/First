const myObject = {};
Object.defineProperty(myObject,"a",{
    value:2,
    writable:false,
    configurable:false,
    enumerable:true
});
console.log(myObject.a);//2
myObject.a = 3;
console.log(myObject.a);//2
//configurable,установленный в false не позволит пересоздавать свойство или же удалять его.Код ниже выведет ошибку
// Object.defineProperty(myObject,"a",{
//     value:3,
//     writable:false,
//     configurable:true,
//     enumerable:true
// });
//Тут же просто ничего не произойдет,т.к. удаление запрещено
//delete myObject.a;
//preventExtensions запретит добавление новых свойств объекту
Object.preventExtensions(myObject);
//Для полной иммутабельности - Object.freeze()
//enumerable: false - свойство невидно для Object.keys и для for..in