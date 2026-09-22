console.clear(); // Limpieza de terminal

//Funcion por declaración (definición de función)
function saludaralumno(nom) { //declarando la función
    console.log('Hola bienvenido a JS', nom)
}

saludaralumno('Alejandro') //Invocar la función

separador()

//función por Invocación <----------------------------------------------
//Recibe Parámetro - NO Retorna valor
function saludar(nom) {
    console.log('Hola bienvenido al sito sin retorno', nom)
}
saludar("Leonardo") //Invocación de la funcion con el argumento

//Recibe Parámetro - Retorna valor
function saludarConRetorno(nom) {
    return 'Hola bienvenido al sito con retorno! ' + nom
}
let retornoSaludar = saludarConRetorno("Gabriela")
console.log(retornoSaludar)

separador()

//No recibe Parámetro - NO Retorna valor
function saludarSinParametro() {
    console.log('Hola bienvenido al sito sin Parámetro y valor')
}
saludarSinParametro()

//No recibe Parámetro - Retorna valor
function saludarSinParamRet() {
    return "Hola bienvenido al sito sin parametro"
}
console.log(saludarSinParamRet())
console.log(saludarSinParamRet)

separador()

//función por expresión (buenas practicas es hacer con Const)
const Bienvenida = function darBienvenida(nomb, apell) {
    console.log(`Bienvenido ${nomb}, ${apell}  a la materia de front del IFTS`)
}

Bienvenida("Julieta", "Vega") //Invoco la función a travez de la constante

//Funciona Anónima o Lambda
//(buenas practicas es hacer con Const)
const BienvenidaMateria =
    function (nomb, apell, mat) {//<--- no deja de ser una función por declaración

        //función por declaración que es guardada en una constante (por expresión), como se guarda en una constante pierde referencia por la cual funciona igual (en este caso como una función annima)

        console.log(`Bienvenido ${nomb}, ${apell}  a la materia de ${mat}`)
    }

BienvenidaMateria("Julieta", "Vega", "Front")

separador()

//función declaración e invocación
function sumar(num1, num2) {
    return num1 + num2
}
let resultado =
    sumar(2, 3) //Funcion por invocación

console.log(`El resultado de la suma es: ${resultado}`)

separador()

/* ( esto es una función anónima)
const sumando = function (num1,num2){
    return num1+num2
}

let resultadoPlus = sumando(10,5)

console.log(`El resultado de la suma es: ${resultadoPlus}`)

separador()
*/

//Funciones Arrows (Funciones flechas)
const sumando = (num1,num2) =>{ //es una función no una ejecución
    return num1+num2
}

let resultadoPlus = sumando(10,5)

console.log(`El resultado de la suma es: ${resultadoPlus}`)
console.log("El tipo de dato que se esta almacenando en la constante suma es:",typeof sumando)

separador()

let nuevoNum // con una constante no se puede declarar sin valor
console.log(nuevoNum)

console.log(nuevoNum == 'undefined')// compara con un string
console.log(typeof nuevoNum == 'undefined')
console.log(nuevoNum == undefined) // compara el contenido
console.log(nuevoNum === undefined) // compara valor y tipo (Comparación estricta)

separador()

let otroNum = null

console.log(otroNum)
console.log(typeof otroNum)
console.log(otroNum === null)
console.log(otroNum == null)

separador()

console.log(otroNum == nuevoNum) //el tipo de dato no es el mismo pero el contenido si.
console.log(otroNum === nuevoNum) 

separador()

//callback
const calculadora = (num1,num2,callback) => {
    return callback(num1,num2) //el parametro callback es una función que se le pasa a calculadora y se invocan 2 argumentos
}
 let resCalculadora = calculadora(5,10, sumar) //invocación

console.log(`El resultado de la suma es: ${resCalculadora}`)

let resCalculadora2 = calculadora(2, sumar(2,3) , sumar)

console.log(`El resultado de la suma es: ${resCalculadora2}`)

separador()

console.log( //Estos casos se realiza cuando son operaciones unicas
    calculadora (10,7,(num1, num2) => { 
        return num1 - num2
    })
)

function separador() {
    console.log("─────────────────────────────────────────────────────────────────────")
}