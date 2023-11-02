//Function starts with function keyword in JS and invokes when it is called.
// program to print a text
// declaring a function
function greet() {
    console.log("Hello there!");
}
// calling the function
greet();

function myFunction(p1, p2){
    return p1 * p2;
}
console.log(myFunction(7, 5));// since we have used return console.log the output.

function myFunction2(p1, p2){
    console.log(p1 + p2);
}
myFunction2(55, 66);

let x = Addition(8,9);
console.log(x);
function Addition(x,y){
    return x + y;
}

function display(){
    let a = 50;
    console.log(a);
}
let a = 80;
console.log(a);
display();

//Accessing the function without () returns the function not the result
let b = display;
console.log(b);