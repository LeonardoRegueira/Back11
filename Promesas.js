//executor (lo que va a dentro de la promesa)
/*const funcionEjecutor = (resolve,reject) => {/
    setTimeout(() => {
        if(hayCrema){
            console.log("Mi funcion ejecutor cuando hay crema - RESOLVE")
            resolve('Entregando crema') 
        }
        else{
            console.log("Mi funcion ejecutor cuando no hay crema - REJECT")
            reject('No hay crema')
        }
    }, 4000)
}

const miPromesaCompra = new Promise(funcionEjecutor)
*/

//Declaracion de como se va a comportar la promesa
let hayCrema = true

const miPromesaCompra = new Promise((resolve, reject) => {// resolve y reject tienen que ser funciones
    setTimeout(() => {
        if (hayCrema) {
            console.log("Mi funcion ejecutor cuando hay crema - RESOLVE")
            resolve('Entregando crema') //requiere de una función para su ejecución 
        }
        else {
            console.log("Mi funcion ejecutor cuando no hay crema - REJECT")
            reject('No hay crema')
        }
    }, 4000)
})


//pase a la promesa el resolve y reject
miPromesaCompra
    .then( //es la propiedad que le pasa el resolve
        valor => { // funcion que le vamos a pasar al resolve
            console.log("Promesa cumplida -- el valor recibido es: ", valor)
        }
    )
    .catch(//es la propiedad que le pasa el reject
        valor => { // funcion que le vamos a pasar al resolve
            console.log("Promesa Rechazada -- el valor recibido es: ", valor)
        }
    )
    .finally( //se esta ejecutando siempre aunque sea resolve o reject
        end => {
            console.log("Terminamos con la promesa", end)// declarando una funcion flecha con 1 parameto
        }
    )