var firstName; //undefined   //declaramos
firstName = 'Daniel';        //asignamos
console.log(firstName);      //mostramos


var lastName = "Daniel";  //  declarar / asignar 
lastName = 'Oscar';   //  reasignar
console.log(lastName); 

var secondName = 'Daniel';  // declarando / asignando
var secondName = 'Oscar';   // reasignando
console.log(secondName);

// let

let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);

// let fruit = 'Banana'; // con la variable let no podemos redeclarar la varibale en bloack-scoped

// const

const animal = 'dog'; // declara y asigna
// animal = 'cat'; // reasignando  
// const animal = 'Snake' // no podemos redeclarar tampoco block scoped
console.log(animal);   // con la variable const no podemos reasignar por que es una constante que nunca va cambiar.

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);