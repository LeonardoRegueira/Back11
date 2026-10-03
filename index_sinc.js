//sincronico: si hay una función pendiente. se detiene todo el proceso hasta que se cumpla.

const separa = require ('./modulos/moduloSeparador')

function funcion1 (){
    console.log("Entrando a la función 1")
    console.log("Saliendo a la función 1")
}

function funcion2 (){
    console.log("Entrando a la función 2")
    console.log("ejecutando a la función 1")
    funcion1()
    console.log("Saliendo a la función 2")
}

function funcion3 (){
    console.log("Entrando a la función 3")
    console.log("Ejecutando a la función 2")
    funcion2()
    console.log("Saliendo a la función 3")
}


funcion3()

separa.separador()
