let x = 1;
const incrementor = () => {

    function count(){
        x++;
        console.log(x);
        return incrementor;
    }
    return count;
};
console.log(incrementor()());
incrementor()()();
incrementor();
var increment = (function(n) { return function() { n += 1; return n; } }(0));
// -1 if you want the first increment to return 0 console.log(increment()); console.log(increment()); console.log(increment());
