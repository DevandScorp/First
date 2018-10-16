Array.prototype.square = function(){return this.map(a => Math.pow(a,2));};  // must return [1, 4, 9, 16, 25]
Array.prototype.cube = function(){return this.map(a => Math.pow(a,3));};   // must return [1, 8, 27, 64, 125]
Array.prototype.average = function(){return this.sum()/this.length}; // must return 3
Array.prototype.sum = function(){return this.reduce((acc,next) => acc+next,0)};     // must return 15
Array.prototype.even = function(){return this.filter(a => a%2===0)};    // must return [2, 4]
Array.prototype.odd = function(){return this.filter(a => a%2!==0)};
const arr = [1,2,3,4,5];
console.log(arr.square());
console.log(arr.cube());
console.log(arr.average());
console.log(arr.sum());
console.log(arr.even());
console.log(arr.odd());