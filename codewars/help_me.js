function getNOD(a,b){
    while(b){
        let c = a%b;
        a = b;
        b = c;
    }
    return a;
}
function count(s, pairs) {
    let N = 1;
    for(pair of pairs){
        N*=Math.pow(pair[0],pair[1]);
    }
    console.log(N);
    if(N>1000000000)return 0;
    let k = 0;
    let res=0;
    while(k<N){
        let found = true;
        for(let j = 0;j<s.length;++j){
            if((getNOD(k+j,N)===1 && s[j]==='1')){
                continue;
            }
            else if((getNOD(k+j,N)!==1 && s[j]==='0')){
                continue;
            }
            else{
                found = false;
            }
        }
        if(found){
            ++res;
        }
        ++k;
    }
    return res;
}
result = count('1', [[13, 1], [3, 1], [17, 1], [11, 1], [2, 1], [23, 1], [29, 1], [19, 1]]);
console.log(JSON.stringify([
    [11, 1],
    [13, 1],
    [23, 1],
    [19, 1],
    [2, 1],
    [3, 1],
    [7, 1],
    [17, 1],
    [29, 1],
])===JSON.stringify([
    [11, 1],
    [13, 1],
    [23, 1],
    [19, 1],
    [2, 1],
    [3, 1],
    [7, 1],
    [17, 1],
    [29, 1],
]));
//168960
// console.log(result);
// let count1 = count('01', [[3, 2], [5, 1]]);
// console.log(count1);
// console.log("______________________________");
// let count2 = count('1', [[2, 1], [3, 1]]);
// console.log(count2);
// console.log("______________________________");
// let count3 = count('0', [[3, 1], [2, 1]]);//4
// console.log(count3);
// console.log("______________________________");
// result = count('01', [[3, 3]]);//9
// console.log(result);