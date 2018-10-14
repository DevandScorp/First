function compose(f,g) {

    return function () {
        const args = [];
        for(let i = 0;i<arguments.length;++i){
            args.push(arguments[i]);
        }
        return f(g(...args));
    };
}
function compose_1(f,g) {
    return function(...a) {
        return f(g(...a));
    }
}
add1 = function(a){return a + 1};
id = function(a){return a};
console.log(compose(add1,id)(0)===1);
// console.log(compose(add1,id)(0) == 1);