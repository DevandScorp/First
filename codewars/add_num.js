function add(n){
    let x = n;
    function add_n(k){
        x+=k;
        // add_n.valueOf = ()=>{return x;};
        return add_n;
    }
    add_n.valueOf = ()=>{return x;};
    return add_n;
}
var addTwo = add(2);
// console.log(addTwo==2); // 2
// console.log(addTwo + 5==7); // 7
// console.log(addTwo(3)==5); // 5
console.log(addTwo(3)(5)==10); // 10
// a(3);
// a(2);
