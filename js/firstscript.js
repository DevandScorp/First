var a = "Hello";
var b = isNaN(a);
console.log(a);
console.log(b);
var c = '123';
var d = parseInt(c);
console.log(c);
console.log(d);
console.log(parseInt(a));
/**
 * Еще крч важная фишка:в js == сравниваются значения.
 * а вот === уже сравнивает значение и тип.
 * Т.е. 123=='123'(true)
 * 123==='123'(false)
 */