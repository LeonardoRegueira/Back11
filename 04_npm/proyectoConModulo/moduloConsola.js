function separador(){
    console.log("--------------separador desde el modulo---------------------")
}

function nuevoseparador(){
    console.log("--------------separador nuevo desde el modulo---------------------")
}
//para usarla  ls función a traves de un modulo tengo que exportarla
module.exports = {separador, nuevoseparador}

console.log(module)