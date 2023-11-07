//Before 
let x = function(){
    console.log("Hello world");
}
x();

//Using Arrowfunction
let x1 = () => {
    console.log("Hello");
}
x1();

//If one parameter
let x2 = (name) => {
    console.log(name);
}
x2("Neema");

let a = name => {
    console.log(`Hi ${name}`);
}
a("Neema");

//Can omit return and curly brackets too if we have only one line
let b = name => name;
console.log(b("Daniel"));

//Arrow function as an expression
let age = 5;
let myFunction = (age < 18) ? () => ("Baby") : () => ("Adult");
console.log(myFunction());