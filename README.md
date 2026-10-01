Inicialización y Configuración
• npm init: Crea el archivo package.json interactivo para iniciar un nuevo proyecto.

A completar...
package name: (back11) (lo deje que se llame back)
version: (1.0.0) (enter)
description: MiPaquetito
entry point: (index.js) (enter)
test command: (enter)
git repository: (https://github.com/LeonardoRegueira/Back11.git) (enter)
keywords: Mi Paquetito de gestion 3000 pro
author: LGR
license: (ISC) (enter)
type: (commonjs) (enter)

muestra: About to write to /Users/leomacpro/Desktop/Escritorio/Back11/package.json:

{....} confirmamos con YES

• npm init -y: Inicializa el proyecto con los valores predeterminados sin preguntar.

Instalación de Paquetes
• npm install (o npm i): Instala todas las dependencias listadas en el package.json.
• npm install <paquete>: Instala un paquete de forma local en el proyecto.
• npm install <paquete> -D (o --save-dev): Instala un paquete como dependencia de desarrollo.
• npm install <paquete> -g: Instala un paquete de forma global en el sistema.

Gestión de Paquetes
• npm uninstall <paquete>: Elimina un paquete del proyecto.
• npm update: Actualiza todos los paquetes instalados a sus versiones permitidas.
• npm list: Muestra la lista de paquetes instalados en el directorio actual.

----------------------------------------------------------------------------------------------

Ejemplos

Dentro del paquete JSON agrego en "scripts" que permite ejecutar el archivo .js
  "start": "node index.js", 

para ejecutar escribo
npm start
----------------------------------------------------------------------------------------------
Instalación de paquete express

npm i express o npm install express

----------------------------------------------------------------------------------------------
Desinstalación de paquete express

npm uninstall express

----------------------------------------------------------------------------------------------
Instalacion de paquete colors

npm i colors

para instalar  como dependencia de desarrollo

npm i colors -D

para eliminar la dependencia...

npm uninstall colors
----------------------------------------------------------------------------------------------