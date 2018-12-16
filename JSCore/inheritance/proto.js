const animal = {
    eats:true
}
const rabbit = {
    jumps:true
}

rabbit.__proto__ = animal;

console.log(rabbit.jumps);
console.log(rabbit.eats);
/**
 * Объект, на который указывает ссылка __proto__,
 *  называется «прототипом». В данном случае получилось, что animal является прототипом для rabbit.
 * Object.create просто устанавливает значение __proto__ в объект
 * Объект, создаваемый при помощи Object.create(null) не имеет прототипа, а значит в нём нет лишних свойств
 */

var animal = {
    eat: function() {
      this.full = true;
    }
  };
  
var rabbit = {
__proto__: animal
};

rabbit.eat();
/**Если коротко – то потому что this будет указывать на rabbit, а прототип при записи не используется.Свойство будет в rabbit */