function crossProduct (vector1, vector2) {
    if(typeof vector1!=='object' || typeof vector1!=='object')throw "Arguments are not 3D vectors!";
    if(!vector1 || !vector2)return null;

    if(vector1.length>3 || vector2.length>3)return null;
    return [vector1[1]*vector2[2]-vector1[2]*vector2[1],vector1[2]*vector2[0]-vector1[0]*vector2[2],vector1[0]*vector2[1]-vector1[1]*vector2[0]];
}
// console.log(crossProduct([1,0,0], [0,1,0], 3, 3));    /* should return [0,0,1] */
// console.log(crossProduct([1,2,3,4,5], [5,4,3,2,1], 5, 5)); /* should return NULL */
// console.log(crossProduct([6,6,6], null, 3, 3));           /* should return NULL */
// console.log(crossProduct(null, null, 3, 3));
console.log(crossProduct(undefined, undefined));
// crossProduct('gobbledigook', [1,1,1]);