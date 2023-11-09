//Iteradores en JS
const tecnologias =  ["HTML", "CSS", "JS", "REACT"]

//forEach - Acceder y listar a cada uno de los elementos de un array
//Se ejecuta por cada elemento

const arrayForeach = tecnologias.forEach(function(tech){
    return tech
})

//map - te permite crear un nuevo arreglo
const arrayMap = tecnologias.map(function(tech){
    return tech
})
console.log(arrayMap)
console.log(arrayForeach)