function bind(func,context){
    return function(...args){
        return func.apply(context,args)
    }
}
const a = function(){
    return this;
}
const b = bind(a,{foo: 'var'});
const c = bind(a,null);
const d = bind(c, { g: '1' });
console.log(b);
console.log(c);
console.log(d);