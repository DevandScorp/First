function partitionOn(pred, items) {
    const t = [];
    const f = [];
    for(let i = 0;i<items.length;++i){
        if(pred(items[i])){
            t.push(items[i]);
        }
        else{
            f.push(items[i]);
        }
    }
    items.splice(0,items.length);
    items.push(...f);
    items.push(...t);
    return t.length;
}
function betterPartitionOn(pred,items){
    const f = items.filter(function (e) {return !pred(e);});
    const t = items.filter(function (e) {return pred(e);});
    items.length=0;
    items.push(...f);
    items.push(...t);
    return i;
}
var items = [1, 2, 3, 4, 5, 6];
function isEven(n) {return n % 2 == 0}
var i = partitionOn(isEven, items);
console.log(items);
console.log(i);
var items = [1, 2, 3, 4, 5, 6];
var i = betterPartitionOn(isEven, items);
console.log(items);
console.log(i);