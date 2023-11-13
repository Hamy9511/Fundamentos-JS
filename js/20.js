//Operadores Ternearios
const autenticado = true
autenticado ? console.log("usuario autenticado") : console.log("No autenticado")
// Lo que esta dentro de    ?   y   : es lo  que se ejecuta si la condicion se cumple
// de los : a la derecha es lo que se ejecutara lo que no se cumple
//y del ? a la izquierda es la condicion
//Doble ternario

const saldo = 600
const pagar = 700
const tarjeta =  true

saldo > pagar ?
    console.log("Puedes pagar") :
    tarjeta ? //Segunda condicion
    console.log("Puedes pagar Tarjeta") 
    : console.log("no puedes pagar ")

