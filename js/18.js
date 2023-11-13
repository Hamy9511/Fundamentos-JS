//Comparacion y operador Estricto

const numero1 = 20
const numero2 = "20"

if(numero1 === Number(numero2)){ // Dos "==" es comparacion no estricto, solo revisa el valor 
    // "===" Comparador esctricto revisa tipo de dato y valor
    console.log("Si son iguales")

}else{
    console.log("no son iguales")
}

const autenticado = true

if(autenticado){ // Solo con  Booleanos si no colocas  == este compara si es verdfadero
    console.log("Si esta autenticado")
}