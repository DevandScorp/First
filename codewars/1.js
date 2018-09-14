function removeSmallest(numbers) {
    var arr = [];
    if(numbers===undefined  || numbers.length===0){
        return arr;
    }
    var min = numbers[0];
    var min_i = 0;
    for(let i = 0;i<numbers.length;++i){
        if(numbers[i]<min){
            min=numbers[i];
            min_i=i;
        }
    }
    for(let i = 0;i<numbers.length;++i){
        if(i!=min_i){
            arr.push(numbers[i]);
        }
    }
    return arr;
}
function removeSmallest_correct(numbers){
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0,indexOfMin),...numbers.slice(indexOfMin+1)];
}
var arr = [];
console.log(removeSmallest(arr));
console.log(removeSmallest_correct(arr));