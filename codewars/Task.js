let n = 4;
let k = 1;
const arr = [];
for(let i=Math.floor(n/2)-1,j=Math.floor(n/2);i>=0 && j<n;--i,++j){
    arr[i] = k;
    arr[j] = k;
    k++;
}
console.log(arr);