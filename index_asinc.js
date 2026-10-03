const separa2 = require('./modulos/moduloSeparador')
const saludo = require('./modulos/moduloSaludar')

separa2.separador() //invocación

//declaración de funciones
function entrar() {
    console.log("ingresando a la funcion ENTRAR")
}

function saludar(param1, param2) {
    saludo.saludar(param1, param2)
}

function salir(param) {
    console.log("ingresando a la funcion SALIR", param)
}

console.log("console .log antes de el set time out") //sinc

//invocación de funciones sincronica y asincrónica
setTimeout(entrar, 1500) //asinc

setTimeout(saludar, 1100) //asinc

setTimeout(saludar, 1000, "Imprimiendo desde el setInterval", "Esto es asinc") //asinc

/*setTimeout(saludar, 1000,"Imprimiendo desde el setInterval") es lo mismo que

setTimeout(saludar, 1000){
    saludar("Imprimiendo desde el setInterval") Lo entre comilla es el valor de param o param1
}
*/
setTimeout(salir, 0) //asinc

setImmediate(salir, "Inmediato")//invocion inmediata antes de los setTimeOut (asinc)


setTimeout(saludar, 2000, "Imprimiendo con pro2000") //asinc

//setInterval (retorna es un método el ID de intervalo)
//setInterval(saludar, 1000, "hola mundo") //una ejecución infinita (para cancelar ctrl + c)

separa2.separador() //como es sincrónico se ejecuta despues de setImmediate

//clear interval
let vuelta = 0

const intervalVuelta = setInterval(() => {
    console.log(`estoy en la vuelta ${vuelta}`)
    if (vuelta === 10) {
        clearInterval(intervalVuelta)
    }
    vuelta++
}, 1000)