// a = 5;
// let a;
// console.log(a); - не закомпилится-a is not defined
/**Переменная let видна только после объявления. */
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const arr3 = array1.concat(array2)
console.log(arr3);
console.log([1,2,3,4,5,6].slice(2,3));//[3]
//Object.assign()-копирует свойства объекта в первый параметр
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj1 = Object.assign(o1, o2, o3);
console.log(obj1); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, изменился и сам целевой объект.

let x,y=null;
console.log(x==y);//true

let res = 'ten' * 2;
console.log(res==NaN);//false,т.к. NaN всегда равен false

const sum = function(x,y){
    console.log(arguments.length);
    return x+y;
}
sum(3,5,8);//3

function Car(color){
    this.color = color;
}

const lada = new Car("red");
Car.prototype.currentGear = 5;
console.log(++lada.currentGear);//6
console.log(lada.currentGear);//6
console.log(Car.prototype.currentGear);//5

function Person(first,last){
    this.first = first;
    this.last = last;
    this.getName = () => this.first + ' ' + this.last;
}

let batman = new Person('Bruce','Wayne');
console.log(batman.getName());
console.log(batman.getName.call({first:'Clark',last:'Kent'}));//call не меняет объект this у стрелочной функции,
//т.е. у стрелочной функции ты не можешь подменить this
console.log(batman.getName.apply({first:'Clark',last:'Kent'}));//apply тоже
console.log(batman.getName.bind({first:'Clark',last:'Kent'})());//bind аналогично
//с обычным объявлением прокатит

function f(){
    return f; 
}
const a = f();
var isThis = new f() instanceof f;
console.log(isThis);//false
console.log(new f() instanceof Function);//true
console.log(typeof f);//function
console.log(typeof a);//function