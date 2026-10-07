const express = require('express')

//modulo nativo para lee documentos carpeta y archivos, navegar directorios, etc
const fs = require('node:fs')

//leemos el contenido con el filesistem
const HOME = fs.readFileSync('./wiews/home.html')

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
    res.status(200).send("<h1>Esta es la ruta principal del servidor<h1>");
})

//crear un rutting para poder ir a otra ruta
app.get('/api', (req, res) => {
    console.log("Entrando a la raiz de api");
    res.status(200).send("<h2>Esta es la ruta /api</h2>");
})

//método que escucha
//primero paso como argumento el puerto, luego la direccion y como tercero una callback
app.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor está corriendo en http://${HOSTNAME}:${PORT}/`);
})



//3:21:35