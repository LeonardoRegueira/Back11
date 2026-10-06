//*---Arrays--*/
let a = 5;
let b =10;

console.log("El valor de a es ",a);
console.log("El valor de b es ",b);

//Destructuring
//genero un array para desenpacar las 2 variables

[a,b]=[b,a];

console.log("El valor de a despues de Destructuring ",a)
console.log("El valor de b despues de Destructuring",b)



//*---objetos--*/
//si al generar el array declaro una 3ra variable [a,b,c]=[b,a], c va a vale undefined
//en un objeto cambia por que no va por posición sino por ID
const user = {
    id: 40,
    isVerified: true,
    //hola: "saludo"
};

const { id, isVerified, hola } = user;

console.log("el valor de id es", id);
console.log("el valor de isVerified es",isVerified);
console.log("el valor de hola es",hola); //en el objeto user no hay una propiedad llamada "hola" por la cual no va a poder almacenar. su valor es undefined