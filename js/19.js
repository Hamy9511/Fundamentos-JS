//

const saldo = 600
const pagar = 700
const tarjeta =  true
if(saldo >  pagar && tarjeta ) { // || Este es Or osea si se  cumple al menos una
    //&& Se tiene que cumplir ambas
    console.log("Puede pgar")
}
else{
    console.log("no puedes pagar")
}