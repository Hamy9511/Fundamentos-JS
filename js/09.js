//Operaciones en dos arregflos

const tecnologias =  ["HTML", "CSS", "JS", "REACT"]

//Añadir elementos al array

tecnologias.push("MySql") // Añader al final
tecnologias.unshift("MySql") //Añade al inicio
//Estos dos metodos no se usan en React 


//El siguiente es como se usa, creando un nuevo arreglo
const nuevoArreglo = [...tecnologias, "Oracle"] //añadir al final
const nuevoArreglo2 = ["Google",...tecnologias] //Añadir al inicio

console.log(nuevoArreglo)
console.table(nuevoArreglo2)