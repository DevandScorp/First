function countWords(str) {
    if(!str)return 0;
    if(str.match(/^\s+$/))return 0;
    str.trim();
    return str.match(/\b[a-zA-Z0-9_']+\b/g).length;
}
function countWords_Sec(str){
    if(!str)return null;
    const split = str.split(",");
    split.pop();
    split.shift();
    return split.length ? split.join(' ') : null;
    // return str.split.slice(-1,1).join(' ');
}
console.log(countWords_Sec('1,2,3'));
