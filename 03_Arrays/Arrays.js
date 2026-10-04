//arrays
const miArrays =[] //la forma de identificar un arrays es por []
console.log(miArrays)

//Diferencia con un objeto
const miObj = {} //la forma de identificar un objeto es por {}
console.log(miObj)

separador()

//tipo de datos
console.log("El tipo de miArrays es:", typeof miArrays)
console.log("El tipo de miObj es:", typeof miObj)

separador()

//new arrays (Invocando al método constructor del objeto)
let miArrayNew = new Array ()
console.log(miArrayNew)
console.log("El tipo de miArrays es:", typeof miArrayNew)

separador()

let newPandora = ["Uno","3",2,"otro gato",true,false,{nombre:"Leonardo.G"},["primera Posicion","SegundaPosicion"],""]

console.log(newPandora)

console.log(newPandora[1]) //arrays[posición del elemento]

let indice = 1
console.log("el indice es",indice," - El valor es", newPandora[indice],"el tipo es:",typeof newPandora[indice]) 

indice = 2
console.log("el indice es",indice," - El valor es", newPandora[indice],"el tipo es:",typeof newPandora[indice]) 

indice = 6
console.log("el indice es",indice," - El valor es", newPandora[indice],"el tipo es:",typeof newPandora[indice]) 

indice = 7
console.log("el indice es",indice," - El valor es", newPandora[indice],"el tipo es:",typeof newPandora[indice]) 

separador()

function eliminarUltimoElemento(){
let numeroeliminadopop = numeros.pop() //POP (elimina el ultimo elemento)
console.log("El numero eliminado es",numeroeliminadopop)
console.log(numeros)
}

function eliminarPrimerElemento(Array){
console.log(numeros)
numeros.shift() //SHIFT (elimina el primer elemento)
console.log(numeros)
}

//Métodos arrays
let numeros = new Array(0,1,44,23,3,2,0,6,89)

//PUSH (agrego un nuevo elemento)
console.log(numeros)
numeros.push(29) //accedo a las propiedad del método
console.log(numeros)

//llama a la funcion para realizar el método pop
eliminarUltimoElemento()

//UNSHIFT (agrega en la primera posicion )
let numeroUnshift = numeros.unshift(11)
console.log("El nuevo número agregado en la primera Posición es",numeroUnshift)

//llama a la funcion para realizar el método shift
eliminarPrimerElemento()

separador()



function separador() {
    console.log("-------------------------------------")
}