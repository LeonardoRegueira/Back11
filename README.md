<h1>NPM CODE</h1>
<h2>Inicialización y Configuración </h2>
• npm init: Crea el archivo package.json interactivo para iniciar un nuevo proyecto.

A completar...<br>
package name: (back11) (lo deje que se llame back)<br>
version: (1.0.0) (enter)<br>
description: MiPaquetito<br>
entry point: (index.js) (enter)<br>
test command: (enter)<br>
git repository: (https://github.com/LeonardoRegueira/Back11.git) (enter)<br>
keywords: Mi Paquetito de gestion 3000 pro<br>
author: LGR<br>
license: (ISC) (enter)<br>
type: (commonjs) (enter)<br>

muestra: About to write to /Users/leomacpro/Desktop/Escritorio/Back11/package.json:

{....} confirmamos con YES

• npm init -y: Inicializa el proyecto con los valores predeterminados sin preguntar.

<h2>Instalación de Paquetes</h2>
• npm install (o npm i): Instala todas las dependencias listadas en el package.json.<br>
• npm install <paquete>: Instala un paquete de forma local en el proyecto.<br>
• npm install <paquete> -D (o --save-dev): Instala un paquete como dependencia de desarrollo.<br>
• npm install <paquete> -g: Instala un paquete de forma global en el sistema.<br>

<h2>Gestión de Paquetes</h2>
• npm uninstall <paquete>: Elimina un paquete del proyecto.<br>
• npm update: Actualiza todos los paquetes instalados a sus versiones permitidas.<br>
• npm list: Muestra la lista de paquetes instalados en el directorio actual.<br>

*********************************************************************************************
Ejemplos

Dentro del paquete JSON agrego en "scripts" que permite ejecutar el archivo .js
  "start": "node index.js", 

para ejecutar escribo
"npm start"
*********************************************************************************************
Instalación de paquete express 

npm i express o npm install express

*********************************************************************************************
Desinstalación de paquete express

npm uninstall express

*********************************************************************************************
Instalacion de paquete colors

npm i colors

para instalar  como dependencia de desarrollo

npm i colors -D

para eliminar la dependencia...

npm uninstall colors

*********************************************************************************************