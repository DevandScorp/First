//http://www.codewars.com/kata/a-function-within-a-function/train/javascript
function always (n) {
    return ()=>{return n;}
}
console.log(always(true)());