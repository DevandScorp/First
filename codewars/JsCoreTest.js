// // var scope = 'global';
// function outer(){
//     function scope(){
//         console.log(scope);
//     }
//     scope();
// }
// outer();
// var i = 5;
// (function(){
//     var j= 2;
// })();
// console.log(i+j);
// console.log("130" + 3 - "1");//1302
// console.log("two"/2);
//Nan 
// var test2 = {
//     "name":"Max",
//     "getName":function(){
//         return this.name;
//     }
// }
// var getName = test2.getName;
// console.log(getName()=="max");
// var test3 = function(){
//     var i = 0;
//     for(var i = 0;i<10;++i){
//         var j = i;
//     }
//     console.log(i+j);
// };
// test3();
// var answer = 42;
// var logAnswer = function(){
//     console.log(answer);
// }
// var sum = function(x,y){
//     var answer = x+y;
//     logAnswer();
//     return answer;
// }
// sum(2,4);
// function car(color){
//     this.color = color;
// }
// var lada = new car("red");
// car.prototype.currentGear = 5;
// console.log(++lada.currentGear);
// console.log(car.prototype.currentGear);

function f(){return f;}
console.log(new f() instanceof f);
// console.log([1,2,3,4,5,6].slice(2,3));
// const x = null || 0 || {name:"false"};
// console.log(x);
// const invoke = function() {console.log('invoke')};
// invoke();
// let x = null,y= null;
// console.log(null===y);
// const obj = {}
// console.log(obj.toString());
// console.log(obj.valueOf());
// console.log(obj.toLocaleString());
// console.log(obj.isPrototypeOf());
// var res = "ten"*2;
// console.log(res);
// console.log(res===NaN);
// var arr = new Array(3);
// console.log(arr[0]);
// let x = 50;
// if(x<100){
//     let x =200;
//     console.log(x);
// }
// console.log(x);
// var arr1 = ["3"];
// var arr21 = ["3"];
// console.log(arr1==arr21);
// function x(o){
//     o.a = o.a+5;
//     o = {
//         a:20
//     }
// }
// var obj = {a:1};
// x(obj);
// console.log(obj.a);
// var obj = {a:1};
// Object.prototype.z=12;
// console.log(typeof obj.z==undefined);
// var globalVar = 'global';
// function x(){
//         console.log(globalVar);
//         return;
//         var globalVar = '5';
//     }
//     x();