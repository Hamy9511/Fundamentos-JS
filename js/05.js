//Manipulacion de objetos

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

//Reescribir un valor

producto.nombre = "monitor Curvo" //Aunque el objeto sea "const" se puede reescribir

console.table(producto)

//Si no existe,lo va añadir
producto.imagen = "imagen.jpg"

//borrar un valor del objeto

delete producto.disponible

console.table(producto)

//Evitar que alguien modifique mi objeto

Object.freeze(producto) //No te deja modifcar nada, ni añadir ni elinar
Object.seal(producto) //Te permite modificar pero no eliminar y no agregar