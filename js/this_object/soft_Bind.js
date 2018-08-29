console.log("_____________________________________________");
function foo(){
    console.log("name: " + this.name);

}
var obj = {name : "obj"};
var obj1 = {name : "obj1"};
var obj2 = {name : "obj2"};
var fooOBJ = foo.softBind(obj);
fooOBJ();//name:obj