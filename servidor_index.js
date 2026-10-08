const express = require('express') //importar el modulo express y el fileSistem

//modulo filesistem (fs) nativo para lee documentos carpeta y archivos, navegar directorios, etc
const fs = require('node:fs')
const { json } = require('node:stream/consumers')
const { infoLenguajes } = require('./src/lenguajes')
const { send } = require('node:process')

//importo el objeto de lenguajes.js
const lenguaje = require('./src/lenguajes').infoLenguajes
//const lenguaje =require('./src/lenguajes').infoLenguajes.backend
//.infoLenguajes es para tarer el objeto (si pongo . y muestra los objetos quiere decir que estoy importando correctamente)


//leemos el contenido con el filesistem
const HOME = fs.readFileSync('./views/HOME.html')
const API = fs.readFileSync('./views/API.html')

//creamos una constante con la direccion y puerto
const HOSTNAME = '127.0.0.1';
const PORT = 3000;

//Creamos una constante donde guardaba la instancia de express
const app = express()

//Para hacer una solicitud a método raiz (home)
/* '/' es el path de la URL
El req, es el request , solicitud de respuesta  del cliente al servidor
El res , es el response, es el objeto de respuesta que se le manda al cliente*/
app.get('/', (req, res) => {
    console.log("Entrando a la raiz de la API"); //cuando entro en el sitio muestra el mensaje con la terminal

    //imformo el tpo de contenido
    res.setHeader('Content-Type', 'text/html')

    //si sale todo bien...
    res.status(200).send(HOME);// (HOME) dirige -> al archivo home.html
})

//crear un rutting para poder ir a otra ruta
app.get('/api', (req, res) => {
    console.log("Entrando a la raiz de api");

    res.setHeader('Content-Type', 'text/html')

    res.status(200).send(API);

    //res.status(404).send("sitio no encontrado");
})

//hacemos un ENDPOINT o ruta para acceder al ombeto importado
app.get('/api/lenguajes', (req, res) => {
    console.log("entrando en la ruta /api/lenguajes")

    //Cuando mandamos información al cliente va a ser en formato objeto JSON. El cliente nos va a mandar en OBJETO.
    //Hay 2 métodos de JSON para convertir de OBJETO -> JSON (PARSE), JSON -> OBJETO (stringify) 
    const mijson = JSON.stringify(lenguaje) //infoLenguajes es un OBJETO, LO CONVIERTO A JSON
    res.setHeader('Content-Type', 'application/json')//informar al cliente que es un formato .JSON
    console.log(mijson)
    res.status(200)
    res.send(mijson)

    /*Para ver en el navegador 
        npx nodemon servidor_index.js
        http://127.0.0.1:3000/api/lenguajes
    */
})

app.get('/api/lenguajes/frontend', (req, res) => {
    console.log("entrando en la ruta /api/lenguajes/frontend")
    res.send(lenguaje.frontend)
})

app.get('/api/lenguajes/backend', (req, res) => {
    console.log("entrando en la ruta /api/lenguajes/Backend")
    res.send(lenguaje.backend)
})

//filtrar de un objeto http://127.0.0.1:3000/api/lenguajes/frontend/
app.get('/api/lenguajes/frontend/:lenguaje', (req, res) => {
    
    let lenguajeparam = req.params.lenguaje

    console.log(lenguajeparam)//muestro por consola lo que voy a filtrar

    const filtrado = lenguaje.frontend.filter( //si esta el lenguaje va a mostrar el objeto
        lenguaje => lenguaje.nombre.toLocaleLowerCase() == lenguajeparam.toLocaleLowerCase() // este metodo convierte el obvjeto o lo que reciba en minuscula
    )

    if (filtrado.length === 0) {
        return res.status(404).send(`no se encontro el lenguaje en frontend ${lenguajeparam}`)
    }
    res.status(200).json(filtrado)
})


//método que escucha
//primero paso como argumento el puerto, luego la direccion y como tercero una callback
app.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor está corriendo en http://${HOSTNAME}:${PORT}/`);
})