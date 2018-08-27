var user = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
};
var {name,email} = user;
console.log(name + " " + email);

var{name:userName,age:userAge} = user;
console.log(userName + " " + userAge);
//Массивы
var users = ["Tom","Sam","Bob"];
var [a,b,c] = users;
console.log(a);
console.log(b);
console.log(c);
var users_1 = ['Tom','Sam','Bob','Ann','Alice','Kate'];
var [first,,third] = users_1;
console.log(first);
console.log(third);