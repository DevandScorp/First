function sequence(n, pattern) {
    const arr = new Array(n);
    if(typeof pattern === 'function'){
        for(let i = 0;i<n;++i){
            arr[i] = pattern(arr[i],i);
        }
    }
    else{
        arr.fill(pattern);
    }
    return arr;
}
console.log(sequence(5, (x, idx) => idx%2));
console.log(sequence(5, []));
console.log(sequence(3, 's'));
console.log(sequence(3, 4));

