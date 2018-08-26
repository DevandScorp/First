function display() {
    console.log('Доброе утро');
    display = function () {
        console.log('Добрый вечер');
    }
}
var displayMsg = display;//важно,чтобез скобок
display();//Доброе утро
display();//Добрый вечер
displayMsg();//Доброе утро-т.к. здесь ссылка на метод,то он не изменится.
//Еще раз:это ссылка на метод,а не сам метод.Поэтому он не булет меняться
var displayMsg = display;
displayMsg();//Но вопрос в том,на каком моменте ты поставил ссылку.Т.е. сейчас будет добрый вечер
displayMsg();