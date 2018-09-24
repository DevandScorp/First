const createIncrementer = () => {
    function* idMaker(){
        let index = 1;
        while(index<=1000)
            yield index++;
    }
    return idMaker();
};
const inc = createIncrementer();

console.log(inc.next().value===1);
console.log(inc.next().value===2);
console.log(inc.next().value===3);

let current = 3;
for (let n of inc) {
    current++;

    console.log(current===n);
    if (n > 10) break;

}
// var it = idMaker();
//
// console.log(it.next().value); // 0
// console.log(it.next().value); // 1
// console.log(it.next().value); // 2
// for(let i of it){
//     console.log(i);
// }