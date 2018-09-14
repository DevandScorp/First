function equals(a,b) {
    for(let i = 0;i<a.length;++i){
        if(a[i]!==b[i])return false;
    }
    return true;
}
function contains(arr,elem){
    for(var a of arr){
        if(equals(elem,a))return true;
    }
    return false;
}
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
function getLoveTrianglesCount(preferences) {
    // your implementation
    var res = [];
    var arr = [-1,...preferences];
    var count = 0;
    for(let i = 1;i<arr.length;++i) {
        if (arr[arr[arr[i]]] === i && (arr[arr[i]]!=i || arr[i]!=i)) {
            let elem = [arr[i],arr[arr[i]],arr[arr[arr[i]]]].sort(compareNumeric);
            if(!contains(res,elem)){
                ++count;
                res.push(elem);
            }

            // console.log('i = ' + i);
        }
    }
    return count;
}
var prefs = [2, 3, 1, 5, 6, 4];
console.log(getLoveTrianglesCount(prefs));
var prefs = [3, 3, 3, 3, 3, 3, 3, 3];
console.log(getLoveTrianglesCount(prefs));
//           1   2   3   4  5   6  7   8   9   10  11 12 13  14  15  16 17 18 19 20 21
// var prefs = [6, 14, 12, 21, 3, 20, 7, 15, 16, 16, 14, 4, 11, 13, 18, 2, 1, 8, 3, 1, 12];
// console.log(getLoveTrianglesCount(prefs));
//           1   2   3   4  5   6  7   8   9   10  11  12  13  14  15  16 17 18 19  20
// var prefs = [6, 14, 12, 21, 3, 20, 7, 15, 16, 16, 14, 4, 11, 13, 18, 2, 1, 8, 3, 1, 12];
// console.log(getLoveTrianglesCount(prefs));
// var prefs = [2, 3, 1, 9, 8, 6, 3, 8, 1, 5];
// console.log(getLoveTrianglesCount(prefs));
// var prefs =  [2, 3, 1, 5, 6, 4, 8, 9, 7, 0, 10, 18, 20, 14, 7, 17, 8, 14, 10, 1];
// console.log(getLoveTrianglesCount(prefs));
// var prefs = [2, 3, 1, 5, 6, 4, 8, 9, 7, 0, 10, 18, 20, 14, 7, 17, 8, 14, 10, 1];
// console.log(getLoveTrianglesCount(prefs));
// var prefs = [2, 3, 1, 5, 6, 4];
// console.log(getLoveTrianglesCount(prefs));
// var prefs = [2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4];
// console.log(getLoveTrianglesCount(prefs));
// var prefs = [3, 3, 3, 3, 3, 3, 3, 3];
// console.log(getLoveTrianglesCount(prefs));
// var prefs = [4, 5, 6, 5, 5, 6];
// console.log(getLoveTrianglesCount(prefs));
// var prefs =  [2, 3, 1, 5, 6, 4, 8, 9, 7, 11, 12, 10];//, 8, 9, 7, 11, 12, 10, 13, 9, 13, 2, 15, 13, 12, 11
// console.log(getLoveTrianglesCount(prefs));