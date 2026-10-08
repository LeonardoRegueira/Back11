<h1> Paso 1</h1>
<p>crar el paquete JSON</p>
<p>npm init -y</p>

<h1> Paso 2</h1>
<p>Instalar express</p>
<p>npm i express</p>

<h1> Paso 3</h1>
<p>crar el paquete JSON</p>
<p>npm i -D nodemon</p> <!-- -D de Dependencies desarrollo-->

<h1> Paso 4</h1>
<p>Exportamos express</p>
<p>const express = require('express')</p>

<h1>Para ejecutar</h1> 
<p>npx nodemon index.js</p>

<h1>Importar datos de un archivo.js</h1>
<p>en el archivo con la información exporto</p>
<p>module.exports.infoLenguajes = infoLenguajes </p>

<p>en el archivo con la información importo</p>
<p>const lenguaje =require('./src/lenguajes').infoLenguajes </p>
<br>
<p>const lenguaje =require('./src/lenguajes').infoLenguajes.backend </p>
