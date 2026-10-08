const infoLenguajes =
{//objeto que tiene..
    frontend:
        [ //tiene 2 propiedades que a su vez una es un arrays infoLenguajes, uno de ellos almacena...
            { //Almacena un objeto con 5 propiedades
                id: 1,
                nombre: "Javascript",
                turno: "Noche",
                comision: "B",
                cantidadAlumno: 155
            },
            {
                id: 2,
                nombre: "Typecript",
                turno: "Mañana",
                comision: "C",
                cantidadAlumno: 5
            },
            {
                id: 3,
                nombre: "HTML",
                turno: "Tarde",
                comision: "A",
                cantidadAlumno: 15
            },
            {
                id: 4,
                nombre: "CSS",
                turno: "Noche",
                comision: "D",
                cantidadAlumno: 15
            }

        ],
    backend: [
        {
            id: 1,
            nombre: "Javascript",
            turno: "Noche",
            comision: "B",
            cantidadAlumno: 1550
        },
        {
            id: 2,
            nombre: "PHP",
            turno: "Noche",
            comision: "A",
            cantidadAlumno: 15
        },
        {
            id: 3,
            nombre: "pyhton",
            turno: "Noche",
            comision: "C",
            cantidadAlumno: 550
        },
        {
            id: 4,
            nombre: "Rust",
            turno: "Noche",
            comision: "D",
            cantidadAlumno: 50
        },
    ]
}

//para exportar todo
//si no hay una propiedad con ese nombre la genera y guarda el objeto
module.exports.infoLenguajes = infoLenguajes 
//"module.exports.infoLenguajes" infoLenguajees una propiedad de export que va a almacenar el opbjeto

//importo en el archivo deseado con el required

//console.log(module) //imprime el modulo y como esta formado
//console.log(module.exports) //imprime las propiedades del objeto
//console.log(module.exports.infoLenguajes) //imprime el objeto completo