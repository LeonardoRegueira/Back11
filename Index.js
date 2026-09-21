//--------------------------------------
console.clear(); // Limpieza de terminal
//--------------------------------------

//Recibe Parámetro - NO Retorna valor
function saludar (nom){ //Invocación de función <-----------------------
    console.log('Hola bienvenido al sito sin retorno', nom)
}
saludar("Leonardo")// Ejecución de función <----------------------------

//Recibe Parámetro - Retorna valor
function saludarConRetorno (nom){
    return 'Hola bienvenido al sito con retorno! '+nom
}
let retornoSaludar = saludarConRetorno("Gabriela")
console.log(retornoSaludar)

//No recibe Parámetro - NO Retorna valor
function saludarSinParametro (){
    console.log('Hola bienvenido al sito sin Parámetro y valor')
}
saludarSinParametro()

//No recibe Parámetro - Retorna valor
function saludarSinParamRet(){
    return "Hola bienvenido al sito sin parametro"
}
console.log(saludarSinParamRet())
console.log(saludarSinParamRet)

//