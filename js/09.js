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


//ELIMINAR ELEMENTOS DEL ARRAY
tecnologias.pop() //elimina el ultimo elemento
tecnologias.shift() //Elimina del inciio
tecnologias.splice(0, 1) //Primero desde que elemento y luego de la coma asignas cuantos quieres eliminar
console.table(tecnologias)
//No deben usarse en REACT



//Filter para eliminar elementos de un array en React
const nuevoArray = tecnologias.filter(function(tech){ //Filter hace que se ejecute por cada elemento
    return tech !== "CSS" //Me traigo tyodos lo s elementos diferentes de CSS
})
console.table(nuevoArray)


//REEMPLAZAR ELEMENTOS
tecnologias[0] = "Microsoft" //No se usa porque modificael orginal

const nuevoArray2 = tecnologias.map(function(tech){
    if(tech === "CSS"){
        return "Microsoft"
    }else{
        return tech
    }
})

console.table(nuevoArray2)
