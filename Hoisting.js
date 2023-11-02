//Hoisting is a behavior of JS where the variables and functions can be used before declaring for only "var".
a = 8;
console.log(a);
var a;

//using let
// x = 33;
// console.log(x); //error
// let x;

//Initializations are not hoisted.
var b;
console.log(b);
b = 9;

//Functions are also hoisted
greet();
function greet(){
    console.log("Hi there");
}

//Variables used inside the function are also hoisted
function f(){
    c = 99;
    console.log(b);
    var c;
}
f();

//Hoisting with Function Expression is not allowed
y();
let y = function(){
    console.log("Hello Wrold!");
}

//For const we cannot declare and initialise seperately 