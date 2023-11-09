//  Unir dos Objetos o más

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

const cliente = {
    nombre : "juan",
    premium : true
}

//const nuevoObjeto = Object.assign(producto, cliente) // No porque modifica los objetos originales si un valor tiene un nombre de variable igual

const nuevoObjeto2 = { //Nuevo Objeto que al poner ... le digo que cree una copia sin modificar los originales
    producto: {...producto},
    cliente: {...cliente}
    }
//console.log(nuevoObjeto)
console.log(nuevoObjeto2)