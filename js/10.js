//Destructuring en Arrays

const tecnologias =  ["HTML", "CSS", "JS", "REACT"]

const [var1, var2, var3] = tecnologias //Se asocia el valor a la posicion del arreglo
//const [,,var3] = tecnologias las comas son una posicion en un arreglo             
console.log(var3)


//Ejemlplo en un objeto
const cliente = {
    nombre : "juan",
    tipo : "premium"
}

const {tipo} = cliente
console.log(tipo)