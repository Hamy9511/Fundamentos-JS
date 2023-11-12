//Funciones - Arrow Function

//const sumar = function(){
//    console.log(numero + numero2)
//}

const restar = (numero = 0, numero2 = 0) => {  //Este seria la manera mas completa
    return numero - 20
}
const resultado0 = restar(70)

console.log(resultado0)
//--------------------------------------------------------------------------------------------------------------
//Simplificados
const sumar = (numero = 0, numero2 = 0) => numero + 20 // Si tengo mas de una linea de codigo debo poner corchetes
//el return queda implicito cuando es una sola linea de codigo


const resultado = sumar(30)

console.log(resultado)

//-------------------------------------------------------------------------------------------------

const sumar1 = numero1 => numero1 + 20 // Solo si tengo un solo parametro puedo eliminar el parentesis



const resultado1 = sumar1(30)

console.log(resultado1)

//------------------------------------------------------------------------------------------------------

const sumaArrow = () => 2 + 2

const resultado3 = sumaArrow()

console.log(resultado3)