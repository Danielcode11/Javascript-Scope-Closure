// variables 

var a; //declarando
var b = 'b'; //declaramos / asignamos 
b = 'bb'; //reasignacion
var a = 'aa';  // redeclaracion 



// Global Scope
var fruit = 'apple'; // Global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'colombia';  // global
    console.log(country);
}

countries();
console.log(country);