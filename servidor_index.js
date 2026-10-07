const express = require('express')

//modulo nativo para lee documentos carpeta y archivos, navegar directorios, etc
const fs = require('node:fs')

//leemos el contenido con el filesistem
const HOME = fs.readFileSync('./views/HOME.html')
const API = fs.readFileSync('./views/API.html')

//usar constante con la direccion y puerto
const HOSTNAME = '127.0.0.1';
const PORT = 3000;

//Creamos una constante donde guardaba la instancia de express
const app = express()

//método para hacer una solicitud
//el req, es el request , solicitud de respuesta  
//el res , es el response, es el objeto de respuesta
app.get('/', (req, res) => {
    console.log("Entrando a la raiz de la API"); //cuando entro en el sitio muestra el mensaje con la terminal

    //imformo el tpo de contenido
    res.setHeader('Content-Type','text/html')
    
    //si sale todo bien...
    res.status(200).send(HOME);
})

//crear un rutting para poder ir a otra ruta
app.get('/api', (req, res) => {
    console.log("Entrando a la raiz de api");

    res.setHeader('Content-Type','text/html')
    
    res.status(200).send(API);
})


//método que escucha
//primero paso como argumento el puerto, luego la direccion y como tercero una callback
app.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor está corriendo en http://${HOSTNAME}:${PORT}/`);
})



//3:21:35