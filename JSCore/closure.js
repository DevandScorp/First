function a(num){
    let sum = num;
    function f(num){
        sum+=num;
        console.log(sum);
        f.valueOf = () => {return sum;}
        return f;
    }
    return f;
}
console.log(a(1)(2)(3)(4)(5) == 15);
String.prototype.repeating = function(times){
    return new Array(times).fill(this.toString()).join('');
}
console.log('hello'.repeating(3));