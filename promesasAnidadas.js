const { response } = require("express");

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
        }, 1000);
    })
}

function ejecutarVenta(stockValidado) {
    console.log(`ejecutar la venta - Respuesta de estock es: ${stockValidado}`)

    return new Promise((resolve, reject) => {
        console.log("ejecutando venta")
        setTimeout(() => {
            resolve(`se ejecuta de: ${stockValidado}`)
        }, 2000)
    })
}

function imprimirFactura (ventaRealizada){
    console.log("******** Entrando a imprimir Factura ********")

    return new Promise((resolve, reject) => {
        if(ventaRealizada){
            resolve("Imprimendo factura...")
        }
        else{
            reject("No se puede imprimir la factura -- No hay venta realizada")
        }
    })
}

validarStock("lapicera")
    //.then de validar stock
    .then(response =>{ //si este .then no se ejecuta... no se van a ejecutar los otros 2 .then de venta y facturación
        console.log("estoy ejecutando el .then de validar Stock" ,response)
        return ejecutarVenta(response) //obligatorio el return sino mostrara undefined
    })

    //.then de ejecutar venta (depende de validar stock, si se aprueba ok, sino, no funciona)
    .then(response =>{ //si falla el proceso de venta ESTE .then y el de facturación no va a funcionar
        console.log("estoy ejecutando el .then de ejecutar venta")
        console.log("el response de ejecutar venta es",response)
        return imprimirFactura(true) // si se pone false -- estoy ejecutando el .catch No se puede imprimir la factura -- No hay venta realizada 
    })

    //.then de facturacion (depende de venta, si se aprueba ok, sino, no funciona)
    .then(response =>{ 
        console.log("estoy ejecutando el .then de imprimir factura")
        console.log("el response de imprimir factura es",response)

    })

    .catch(error =>{
        console.log("estoy ejecutando el .catch",error)
    })
    .finally(end=>{
        console.log("estoy ejecutando el finally",end)
    })
