let miAuto = {} //Inicialización de objeto vacío.
console.log("Mostrando mi", typeof miAuto, "de miAuto", miAuto)

separador()

miAuto = { //asignaciôn de propiedades (clave) y valores (valor)
    marca: "delorean",
    cantidadPuertas: 2,
    color: "Plata",
    timeMachine: true, 
    precio2: null,
    unIndefinido: undefined
}

console.log("Mostrando mi", typeof miAuto, "de miAuto", miAuto)

separador()

console.log("El precio de miAuto es:", miAuto.precio)
console.log("El tipo de dato de precio es:", typeof miAuto.precio)

if (miAuto.precio === undefined) {
    console.log("El precio de miAuto no esta inicializado")
    miAuto.precio = 50000000
}

console.log("Mostrando mi", typeof miAuto, "de miAuto", miAuto)

separador()

console.log("El precio de miAuto es:", miAuto.precio)
console.log("El tipo de dato de precio es:", typeof miAuto.precio)

separador()

console.log("El precio2 de miAuto es", miAuto.precio2)
console.log("El tipo de dato de precio2 es:", typeof miAuto.precio2)

separador()

console.log("El unIndefinido de miAuto es", miAuto.unIndefinido)
console.log("El tipo de dato de unIndefinido es:", typeof miAuto.unIndefinido)





separador()
separador()

// const miPelicula ={} no se puede declarar de esta manera el objeto con una constante
// miPelicula = {...}  en esta linea toma como reasignación y no se puede reasignar una constante

const miPelicula = { //asignaciôn de propiedades (clave) y valores (valor)
    Nombre: "Terminator",
    categoria: "ciencia ficción - acción",
    alquilado: true, 
    precio: 300,
    anio: 1984,
}

console.log(miPelicula)

separador()

console.log("La duración de la pelicula",miPelicula.Nombre,"es",miPelicula.duracion)

if(miPelicula.duracion === undefined){
    console.log("La duraciôn de la pelicula no esta inicializada")
    miPelicula.duracion = 3500
}
console.log("La duración de la pelicula",miPelicula.Nombre,"es",miPelicula.duracion)
console.log("El tipo de dato de la propiedad duración es:", typeof miPelicula.duracion)

separador()

miPelicula.Nombre = "Terminator 2 - El juicio final"

console.log(miPelicula)

separador()

let obj1 = {id:100}
let obj2 = obj1 // asignamos la referencia obj1
let obj3 = {id:100}

console.log(obj1 === obj2) //compara valor y tipo (estricto)
console.log(obj1 === obj3) //mismo valor, diferente referencia (estricto)
console.log(obj1 == obj3) //compara valor (objeto1 esta almacenado en un espacio de memoria diferente al objeto 3, aunque sea mismo valor, es falso por que no es lo mismo)

separador()
console.log(obj1)
console.log(obj2)
console.log(obj3)
separador()

obj1.id = 10
obj3.id = 15

console.log(obj1)
console.log(obj2)
console.log(obj3)

separador()
function separador(){
    console.log("-----------------------------------------------------------")
}