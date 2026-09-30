//foreach
let newarray = new Array("uno", 2, "tres", 4, true, false)
newarray.forEach((element, i) => { console.log(`imprimiendo el elemento ${element} en la pos ${i}`) })

//map
let numeros = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log("Los numeros son", numeros)

let numPlus = numeros.map(element => element + 10)
console.log("Los numeros plus son", numPlus)

let plus2= 3
function mapPlus(){
    let numPlus2 = numeros.map(element => element + plus2)
    console.log("Los numeros plus2 son", numPlus2)
}
mapPlus()

let nummin = 3
let nummax = 9

//filter
function recfilter() {
    let recorrernum = numeros.filter(element => element > nummin && element < nummax)
    console.log("Los numeros mayores a 2 y menores a 7 son", recorrernum)
}

recfilter()