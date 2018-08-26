console.log('_______________________________________________');
var bar = 'global';
function foo(){
    console.log(this.bar);
}
function foo1(obj){
    this.bar = obj.bar;
    console.log(this.bar);
}
/**
 * Как известно, в JavaScript нельзя создать несколько функций,
 * различающихся только списком параметров: последняя созданная перезапишет предыдущие.
 * Про различие на уровне типов параметров говорить не приходится вообще.

 * @type {{bar: string, foo: foo}}
 */

var obj1 = {
    bar:'obj1',
    foo:foo
}
var obj2 = {
    bar:'obj2',
}
console.log(obj2.bar);
foo();//global
obj1.foo();//'obj1'
foo.call(obj2);//'obj2',call по сути явно указывает this
/**
 * Вызов func.call(context, a, b...) – то же, что обычный вызов func(a, b...), но с явно указанным this(=context).
 */

new foo();//undefined.При использованиие new в параметрах указыается этот самый this(как с call)
//т.е. у вот этого foo уже абсолютно другой this
/**
 * Так заработает.Еще раз: в js нет пергрузки функций из-за этой сраной возможности автозаполнения полей
 */
 new foo1(obj2);