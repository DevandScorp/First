function getPrime(num){
    var div = 2,res=0;
    while(num>1){
        res=div;
        while(num%div===0){
            num = Math.floor(num/div);
        }
        ++div;
    }
    return res;
}
function getPrime_2(num){
    var div = 2,res=0,max=0;
    while(num>1){
        res=div;
        let count=0;
        while(num%div===0){
            num = Math.floor(num/div);
            ++count;
        }
        max = Math.pow(res,count);
        ++div;
    }
    return max;
}
function get_Prime(num,base){
    let div = getPrime_2(base),res=0;
    while(num>0){
        num = Math.floor(num/div);
        res+=num;
    }
    return res;
}
console.log(getPrime_2(225));
function getZeros(num,base){
    var res = 0,prime = getPrime(base);
    while(num>0){
        num = Math.floor(num/prime);
        res+=num;
    }
    return res;
}
//224-7*32

console.log("Prime: " + getPrime(224));
console.log("Prime 2(Another result): " + get_Prime(1000000000,225));
console.log("Bigger: " + getPrime_2(224));
console.log("Result: " + getZeros(1000000000,225));
//66=2*33;
console.log("Prime: " + getPrime(66));
console.log("Prime 2(Another result): " + get_Prime(88341643, 66));
console.log("Bigger: " + getPrime_2(66));
console.log("Result: " + getZeros(88341643, 66));
console.log("Prime: " + getPrime(68));
console.log("Prime 2(Another result): " + get_Prime(50170843, 68));
console.log("Bigger: " + getPrime_2(68));
console.log("Result: " + getZeros(50170843, 68));
console.log("Prime: " + getPrime(229));
console.log("Bigger: " + getPrime_2(229));
console.log("Result: " + getZeros(35770468, 229));
console.log("Prime: " + getPrime(250));
console.log("Prime 2(Another result): " + get_Prime(4821527, 250));
console.log("Bigger: " + getPrime_2(250));
console.log("Result: " + getZeros(4821527, 250));//401792
