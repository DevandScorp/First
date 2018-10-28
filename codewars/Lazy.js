function Lazy() {
    const invoked = [];
    this.add = function (func,...args) {
        invoked.push([func,args]);
        return this;
    };
    this.invoke = function (...args) {
            let res =invoked[0][0].apply(null,invoked[0][1].concat(...args));
            for(let i = 1;i<invoked.length;++i){
                console.log(invoked[i][1].concat(res));
                res = invoked[i][0].apply(null,invoked[i][1].concat(res));
            }
        return res;
    };
    return this;
}
function max() {
    return Math.max.apply(null, arguments);
}

function filterNumbers() {
    return Array.prototype.filter.call(arguments, function(value) {
        return isNumeric(value);
    });
}

function isNumeric(n) {
    return !isNaN(n) && Number(n) === n;
}

function filterRange(min, max) {
    var args = Array.prototype.slice.call(arguments, 2);
    return Array.prototype.filter.call(args, function(value) {
        return min <= value && value <= max;
    });
}
console.log(new Lazy()
    .add(filterNumbers)
    .add(filterRange, 2, 7)
    .add(max)
    .invoke([1, 8, 6, [], "7", -1, {v: 5}, 4]));
// console.log(filterRange.apply(null,[2,7,1,8,6,-1,4]));
console.log(new Lazy().add(filterRange).invoke([ 1, 3, 4, 2 ]));
// console.log(filterRange());