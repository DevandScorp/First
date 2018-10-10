function getMiddle(s){
  return s.length%2===0?s.substring(s.length/2-1,s.length/2+1):s.charAt(Math.floor(s.length/2));
}
console.log(getMiddle("test"));

console.log(getMiddle("testing"));

console.log(getMiddle("middle"));

console.log(getMiddle("A"));