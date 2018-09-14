console.log("iterators");
var myArray = [1,2,3];
var it = myArray[Symbol.iterator]();
var obj = {
    name:"Artem",
    surname:"Dachevsky",
    age:17
}
while(true){
    let res = it.next();
    if(res.done)break;
    console.log(res.value);

}
for(var key in obj){
    console.log(key + " " + obj[key]);
}