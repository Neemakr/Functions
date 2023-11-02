const prompt = require ("prompt-sync")();
function myfunction(name){
    console.log(`Hello ${name}`);
}
let name = prompt('Enter the name');
myfunction(name);