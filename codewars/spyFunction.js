function spyOn (func) {
    const args = [];
    const returned = [];
    let count = 0;
    function f(...arg){
        returned.push(func(arg));
        ++count;
        args.push(...arg);
        return func(arg);
    }
    f.callCount = () => {return count;};
    f.returned = (a) => {return returned.findIndex((elem)=>{return elem===a;})!==-1;};
    f.wasCalledWith = (a) => {return args.findIndex((elem)=>{return elem===a;})!==-1;};
    return f;
}
function returns1 () { return 1; }

var spy = spyOn(returns1);

console.log(spy.callCount(), 0);
console.log(spy.returned(1), false);
console.log(spy.wasCalledWith('hello'), false);

spy('hello', 'hi', 'howdy');
spy('goodbye', 'bye', 'see ya');

console.log(spy.callCount(), 2);
console.log(spy.returned(1), true);
console.log(spy.wasCalledWith('hi'), true);
console.log(spy.wasCalledWith('bye'), true);