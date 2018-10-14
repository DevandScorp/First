function cache(func) {
    var calls = {};
    return function() {
        var key = JSON.stringify(arguments);
        console.log(key);
        if (!(key in calls)) {
            calls[key] = func.apply(null, arguments);
        }
        return calls[key];
    };
}
var complexFunction = function(arg1, arg2) { return arg1.split('').reverse().join(''); };
var cachedFunction = cache(complexFunction);
//
console.log(cachedFunction('foo', undefined)); // complex function should be executed
console.log(cachedFunction('foo', undefined)); // complex function should be executed