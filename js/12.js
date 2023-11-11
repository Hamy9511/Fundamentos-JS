//Funciones - Function declaration

function sumar(numero = 0, numero2 = 0) { //Parametros son los que van dentro de la funcion()
//El parametro = 0 indica que ese es su valor por deafult    
    console.log(numero)
    console.log(numero2)
    console.log(numero + numero2)
}

sumar(10, 20) //Los valoresw reales son argumentos
sumar(1,2)
sumar(100) // Se puede dar un valor por default si el segundo parametro no esta

function sumar1(numero=0,numero2=0){
    return numero + numero2
}

const resultado = sumar1(20,30)
console.log(resultado)