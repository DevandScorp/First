Array.prototype.filter = function(callback, context) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
};
console.log([1,2,3,4].filter((num)=>{ return num > 3}));