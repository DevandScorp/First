function sumOfOther(arr) {
    if(!arr)return [];
    const res = [];
    for (let i = 0; i < arr.length; i += 1) {
        res[i] = (arr.filter((elem, index) => index !== (+i)).reduce((acc, curVal) => acc + curVal));
    }
    return res;
}
console.log(sumOfOther([2, 3, 4, 1]));
console.log(JSON.stringify(sumOfOther([2, 3, 4, 1]))==JSON.stringify([8, 7, 6, 9]));
