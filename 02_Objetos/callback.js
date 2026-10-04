//funcion por expresión con una función anónima almacenada en una constante y no recibe parámetros de entrada
const funcionB = function () { //declaración 
    console.log("Entrando a la función B")
    console.log("Se ejecuta la función B")
    console.log("Saliendo de la función B")
}

const saludar = function () {
    console.log("Entrando a la función saludar")
    console.log("Hola Mundo")
    console.log("Saliendo de la función saludar")
}

separador()

//funcion por expresión con una función flecha
const funcionA = (Param1, callback) => {
    console.log("Entrando a la función A")
    console.log("el valor del primer parámetro es ", Param1)
    console.log("el valor del segundo parámetro es ", callback)
    callback() //la funcion A ejecuta a la funcion B (Callback)
    console.log("Saliendo de la función A")
}

console.log("Primera ejecución de la función")

funcionA({ id: 1 }, funcionB)

separador()

console.log("Segunda ejecución de la función")

funcionA(funcionB, funcionB)

separador()

function separador() {
    console.log("-------------------------------------")
}