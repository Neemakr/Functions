//Global scope
let a = "hello";
function f(){
    console.log(a);
}
f();

//If a vriable is used without declaring then it becomes global scope.
function f2(){
    b = "Hi!";
}
f2(); //call the function before using the variable else it produces an error. It produces error without calling the function.
console.log(b);