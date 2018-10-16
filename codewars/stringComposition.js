//http://www.codewars.com/kata/stringing-me-along
function createMessage(s) {
    let str = s+ " ";
    function f(s){
        if(!s){
            str = str.trimRight();
        }
        else{str+=s+" ";}
        return f;
    }
    f.valueOf = () => {return str;};
    return f;
}
function createMessageBetter(str) {
    return function(next){
        if (next === undefined) {return str;}
        return createMessage(str + " "+ next);
    }
}
console.log(createMessage("Hello")("World!")("how")("are")("you?")()=="Hello World! how are you?");