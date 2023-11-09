//destructuring con dos o mas objetos

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

const cliente = {
    nombre : "juan",
    premium : true
}

const  { nombre, precio, disponible } = producto
const {nombre: nombreCliente, premium} = cliente // No se pueden destructurar objetos con un valor que tenga mismo nombre de variable
//Es por ello que coloco la sintaxis anterior para agregar un alias 

console.log (nombre, precio, disponible)
console.log(nombreCliente, premium)

