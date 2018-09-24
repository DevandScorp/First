const sortByProto = (arr) => {
    function getCount(obj){
        let count = 0;
        while(obj.__proto__!==Object.prototype){
            ++count;
            obj = obj.__proto__;
        }
        return count;
    }
    arr.sort((a,b)=>getCount(a)<getCount(b));
    return arr;
};
const a = {};
const b = {};
const c = {};
const d = {};
const e = {};
const f = {};
const g = {};
const h = {};

a.__proto__ = b;
b.__proto__ = c;
c.__proto__ = d;
d.__proto__ = e;
e.__proto__ = f;
f.__proto__ = g;
g.__proto__ = h;
console.log(h.__proto__===Object.prototype);
console.log(g.__proto__===h);
let arr = sortByProto([d, b, h, a]);
console.log(arr);
///assert.deepEqual(arr, [a, b, d, h]);

arr = sortByProto([e, c, d, h]);
console.log(arr);
//assert.deepEqual(arr, [c, d, e, h]);