//Tipos de datos

//undifined
let cliente //La variable se crea y ya lleva tipo de valor undefined
console.log(typeof cliente)

//Boolean
const descuento = true //false
console.log(typeof descuento)

//Number
const numero1 = 20.20
const numero2 = 30
const numero3 = -100

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

//Strings o cadenas de tecto
const alumno = "juan"
let producto = 'Monitor 20 pulgadas'

//BigInt
const numeroGrande = BigInt(132452345234534253253253253425234532532)
console.log(typeof numeroGrande)
//no se puede mezclar BigInt con otro tipo de datos es decir no puedo sumar numero con BigInt

//Symbol
const primerSymbol = Symbol(30) //Se convierte en u valor unico
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol)

//Null
const descuento1 = null
console.log(typeof descuento1)