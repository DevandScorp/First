function f(){
    var cachedValue = 0;
    return {
        valueOf: function() { return ++cachedValue; },
    };
}
var mysteryObject = (function() {

});
console.log(mysteryObject().funct_test());
console.log(mysteryObject()==1);
console.log(mysteryObject()==1);
console.log(mysteryObject==3);
// incrementor()()()()();
// console.log(x===8);
// console.log(x);
// incrementor()();
// console.log(x===10);
// console.log(x);
// incrementor()()()()();
// console.log(x===15);
// console.log(x);
// const incrementor = () => {
//     x++;
//     function count(){
//         x++;
//         //console.log(x);
//         return incrementor;
//     }
//     return count;
// };
// incrementor()()();

// var increment = (function(n) { return function() { n += 1; return n; } }(0));
// -1 if you want the first increment to return 0 console.log(increment()); console.log(increment()); console.log(increment());
