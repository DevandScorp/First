let count = 0;
const getDeepPropertiesCount = (obj) => {
   let count=1;
   function getCount(obj){
       for(let key in obj){
            if(typeof obj[key]==='object' && Object.keys(obj[key]).length){
                count+= Object.keys(obj[key]).length;
                return getCount(obj[key]);
            }
       }
   }

    getCount(obj);
   return count;
};
const obj = {};
let temp = obj;
for (let i = 0; i < 100; i++) {
    temp[i] = {};
    temp[i][i - 1] = {};
    temp[i][i] = {};
    temp[i][i + 1] = {};
    //console.log(Object.keys(temp[i]));
    temp = temp[i][i];
}
// console.log(Object.keys(obj[0]).length);
// console.log(obj[1]);
// console.log(Object.keys(obj));
const count1 = getDeepPropertiesCount(obj);
console.log(count1);
// console.log(count1===400);
// console.log(count1);
for (let i = 0; i < 100; i++) {
    temp[i] = {};
    temp[i][i] = {};
    temp[i][i + 1] = {};

    temp = temp[i][i];
}
const count2 = getDeepPropertiesCount(obj);
console.log(count2);
//
// const count2 = getDeepPropertiesCount(obj);
// console.log(count2===700);