//http://www.codewars.com/kata/using-closures-to-share-class-state/train/javascript
// Object.prototype.getName = 15;
// var Cat = (function () {
//     'use strict';
//     var func = function(name,weight) {
//         this.name = name;
//         this.weight = weight;
//         Object.defineProperty(this, 'getName', {
//             get: function () {
//
//             }
//         });
//     }
//
//     return func;
// }());
// console.log(Cat.getName);
// fluffy = new Cat('fluffy', 15);
// garfield = new Cat('garfield', 25);
// console.log(fluffy.getName);
let Cat = (function () {

    function f(name,weight) {
        if(!name || !weight)throw "Error";
        f.sum+=weight;
        this.name = name;
        ++f.count;
        Object.defineProperty(this, "weight", {
            get: function() {
                return weight;
            },
            set: function(value) {
                f.sum-=weight;
                f.sum+=value;
                weight = value;

            }
        });
    };
    f.count=0;
    f.sum=0;

    Object.defineProperty(f,"averageWeight",{
        get:function () {
            return function () {
                return f.count===0?0:f.sum/f.count;
            };
        }
    });
    return f;
}());
try {
    test = new Cat();
}catch(e){

}
fluffy = new Cat('fluffy', 15);
console.log(fluffy.weight);
garfield = new Cat('garfield', 35);
fluffy.weight = 45;
garfield.weight = 25;
console.log(fluffy instanceof Cat);//, true
console.log(fluffy.averageWeight);//, undefined
console.log(typeof Cat.averageWeight);//, "function"
console.log(Cat.averageWeight());//, 20
 fluffy.weight = 35;
console.log(Cat.averageWeight());