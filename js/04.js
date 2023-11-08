//Objetos

//const nombre = "Tablet"
//const precio = 300
//const disponible = true


const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

console.log(producto)
console.table(producto)

console.log(producto.nombre) // Para Acceder a uno deloos valores del objeto

//Destructuring 
//Sacar variables dentro de un objeto
const {nombre, precio, disponible} = producto
console.log(nombre)

//Object Literal Enhacement
//Variables fuera de un objeto colocarla dentro de un objeto

const autenticado = true
const usuario1 = "juan"

const nuevoObjeto = {
    autenticado : autenticado, //Si el nombre es el mismo puedo solo poner el del lado izquierdo
    usuario: usuario1
}

console.table(nuevoObjeto)