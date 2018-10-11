// function prefill(n, v) {
//     let s = n;
//     if(typeof n === 'number' && (n^0)!==n)throw new TypeError(s + " is invalid");
//     n = Number.parseInt(n);
//     if(n<=0) throw new TypeError(s + " is invalid");
//     if(Number.isNaN(n))throw new TypeError(s + " is invalid");
//     return new Array(n).fill(v);
// }
function prefill(n, v) {
    if(!n.toString().match(/^[0-9]+$/))throw new TypeError(n + " is invalid");
    n = Number.parseInt(n);
    return new Array(n).fill(v);
}
console.log(prefill(3,1));
console.log(prefill(2,"abc"));
console.log(prefill(3, prefill(2,'2d')));
console.log(prefill("3", prefill(2,'2d')));
// console.log(prefill(1.8749920983545212, 1));
console.log(prefill("-1", 1));
// console.log(Number.parseInt("-1"));