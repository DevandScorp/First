function longestConsecutiveLength(array) {
    let set = new Set();
    let res = 1;
    for(let a of array){
        set.add(a);
    }
    for(let a of array){
        let count = 1;
        let l = a-1,r=a+1;
        while(set.has(l)){
            ++count;
            set.delete(l);
            --l;
        }
        while(set.has(r)){
            ++count;
            set.delete(r);
            ++r;
        }
        res = Math.max(count,res);
    }
    return res;
}
console.log(longestConsecutiveLength([100, 4, 200, 1, 3, 2]));