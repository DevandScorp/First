function count(f,c){
    switch (c[0]) {
        case '+':return f+c[1];
        case '-':return f-c[1];
        case '*':return f*c[1];
        case '/':return Math.floor(f/c[1]);
    }
}
function zero(f) {
    if(!f)return 0;
    return count(0,f);
}
function one(f) {
    if(!f)return 1;
    return count(1,f);
}
function two(f) {
    if(!f)return 2;
    return count(2,f);
}
function three(f) {
    if(!f)return 3;
    return count(3,f);
}
function four(f) {
    if(!f)return 4;
    return count(4,f);
}
function five(f) {
    if(!f)return 5;
    return count(5,f);
}
function six(f) {
    if(!f)return 6;
    return count(6,f);
}
function seven(f) {
    if(!f)return 7;
    return count(7,f);
}
function eight(f) {
    if(!f)return 8;
    return count(8,f);
}
function nine(f) {
    if(!f)return 9;
    return count(9,f);
}

function plus(a) {return ['+',a];}
function minus(a) {return ['-',a];}
function times(a) {return ['*',a];}
function dividedBy(a) {return ['/',a];}
console.log(seven());
console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);
function zerob(func)   { return func ? func(0) : 0; }
function oneb(func)    { return func ? func(1) : 1; }
function twob(func)    { return func ? func(2) : 2; }
function threeb(func)  { return func ? func(3) : 3; }
function fourb(func)   { return func ? func(4) : 4; }
function fiveb(func)   { return func ? func(5) : 5; }
function sixb(func)    { return func ? func(6) : 6; }
function sevenb(func)  { return func ? func(7) : 7; }
function eightb(func)  { return func ? func(8) : 8; }
function nineb(func)   { return func ? func(9) : 9; }

function plusb( b )      { return function( a ) { return a + b; }; }
function minusb( b )     { return function( a ) { return a - b; }; }
function timesb( b )     { return function( a ) { return a * b; }; }
function dividedByb( b ) { return function( a ) { return a / b; }; }