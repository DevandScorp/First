function foo(num){
    console.log("foo: " + num);

    this.count++;//здесь this буде действительно ссылаться на эту функцию,т.к ты ее вызываем через call
}
foo.count = 0;

for(let i = 0;i<10;++i){
    foo.call(foo,i);
}
console.log(foo.count);