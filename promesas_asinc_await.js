/*asinc antes de una funcion para decir que es asincrona
dentro de la función el await para pausar la ejecución a la espera de que se obtengan todos los datos.*/

const { response } = require("express");
const { error } = require("node:console");

function validarStock(producto) {
    return new Promise((resolve, reject) => {
        console.log(`validando el stock del producto: ${producto}`)
        setTimeout(() => {
            if (producto === 'lapicera') {
                resolve(`Hay stock del producto ${producto}`)
            }
            else {
                reject(`No hay stock del producto ${producto}`)
            }
        }, 10000);
    })
}

function ejecutarVenta(stockValidado) {
    console.log(`ejecutar la venta - Respuesta de estock es: ${stockValidado}`)

    return new Promise((resolve, reject) => {
        console.log("ejecutando venta")
        setTimeout(() => {
            resolve(`se ejecuta de: ${stockValidado}`)
        }, 5000)
    })
}

function imprimirFactura(ventaRealizada) {
    console.log("******** Entrando a imprimir Factura ********")

    return new Promise((resolve, reject) => {
        if (ventaRealizada) {
            resolve("Imprimendo factura...")
        }
        else {
            reject("No se puede imprimir la factura -- No hay venta realizada")
        }
    })
}

//creamos una función por que necesitamos ejecutar el async y await y por dentro usar el try y catch
async function procesarVenta(producto) {
    try {
        const respuestaValidar = await validarStock(producto)
        await ejecutarVenta(respuestaValidar)
        const respuestaFacturar = await imprimirFactura(true)
        console.log(respuestaFacturar)
    } catch (error) {
        console.log("Entrando en el chatch()...")
        console.log(error)
    }
}

procesarVenta("lapicera")
.then(response => {
    console.log("Entrando en el .then de procesar venta", response)
})
.catch(error =>{
    console.log("Entrando en el .catch de procesar venta", error)
})
console.log("despues de procesar venta()...")