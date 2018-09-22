function getZerosCount_2(number, base) {
    var degree = 0;
    var num = number;
    while(num>Math.pow(base,degree)){
        degree++;
    }
    return degree;
    // function getNum(n,base){
    //     var res = [];
    //     while(n!==0){
    //         let ost = n%base;
    //         res.push(ost);
    //         n = Math.floor(n/base);
    //     }
    //     return Number.parseInt(res.reverse().join(''));
    // }
    // number = getNum(number,base);
    // console.log(number);
    // var res=0;
    // while(number>0){
    //     number=Math.floor(getNum(number/5,base));
    //     res+=number;
    // }
    // return res;
}
function maxPowerOf(p,n)
{
    let k = 0;
    let powerOfP = 1;
    while (true)
    {
        powerOfP *= p;
        let addend = Math.floor(n / powerOfP);
        if (addend === 0)
            return k;
        k += addend;
    }
}
function getZerosCount(number) {
    var res=0;
    while(number>0){
        number=Math.floor(number/5);
        res+=number;
    }
    return res;
}

console.log(getZerosCount_2(70497638,2));
console.log(getZerosCount(70497638,2));