const nombre = "Leonardo"
const activo = "Dev"

function saludar(param1,param2) {
    console.log("******* Hola " + nombre + " " + activo + " bienvenido al sistema ******* " + param1, param2)
}

module.exports = { saludar } //module es un objeto, exports es una propiedad del objeto

