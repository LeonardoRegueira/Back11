//const moduloConsola = require(''); <<== Es una función
const moduloConsola = require('./proyectoConModulo/moduloConsola'); // require trae de la dirección , va a leer lo que se esta exportando y me va a traer el module.export a este archivo

//Tambien se puede exportar const moduloConsola = require('./proyectoConModulo/moduloConsola').separador

moduloConsola.nuevoseparador()
var colors = require('colors');

console.log('Hola Mundo!'.blue)

moduloConsola.separador()