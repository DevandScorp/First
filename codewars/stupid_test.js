
// function getPrime(num){
//     var div = 2,res=[],max=0,degree=0;
//     while(num>1){
//         degree =0;
//         max=div;
//         while(num%div===0){
//             num = Math.floor(num/div);
//             ++degree;
//         }
//         ++div;
//     }
//     res.push(max);
//     res.push(degree);
//     return res;
// }

// var num = getPrime(base);
// var p = Math.floor(maxPowerOf(num[0])/num[1],number);
// var p1 = maxPowerOf(5,4821527);
// var p2 = maxPowerOf(2,4821527);
// var p125 = Math.floor(p1/3);
// console.log(Math.min(p2,p125));
// console.log(getPrime(250));
// // const zerosCount = getZerosCount(18835759, 190);
// // assert.equal(zerosCount, 1046428);
// var p19 = maxPowerOf(19,18835759);
// var p2 = maxPowerOf(2,18835759);
// var p5 = maxPowerOf(5,18835759);
// console.log(p19);
// console.log(Math.min(p2,Math.min(p19,p5)));

function getZerosCount(number, base) {
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
        function getPrime(num){
            var div = 2,res=[],max=0,degree=0;
            while(num>1){
                degree =0;
                max=div;
                while(num%div===0){
                    num = Math.floor(num/div);
                    ++degree;
                }
                res.push([max,degree]);
                ++div;
            }
            return res;
        }
    var prime = getPrime(base);
    for(let a of prime){
        a[0]=maxPowerOf(a[0],number);
    }
    var minimum = Math.floor(prime[0][0]/prime[0][1]);
    for(let a of prime){
        minimum = Math.min(minimum,Math.floor(a[0]/a[1]));
    }
    return minimum;
}
console.log(getZerosCount(18835759, 190));
/**
 *  const zerosCount = getZerosCount(18835759, 190);
 assert.equal(zerosCount, 1046428);
 */

