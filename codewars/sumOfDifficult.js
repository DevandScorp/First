function make(...args) {
    if (typeof args[args.length - 1] === 'function') {
        const func = args.pop();
        return args.reduce((acc, next) => func(acc, next));
    }
    return make.bind(null, ...args);
};
function sum(a, b) {
    return a+b;
}
console.log(make('a')('b')(sum));

// sum = sum.bind(null,1,2,4);
// sum = sum.bind(null,3);
// console.log(sum(2));
// make(15)(34, 21, 666)(41)(sum); // return 777
// console.log(sum(43,21,17));
