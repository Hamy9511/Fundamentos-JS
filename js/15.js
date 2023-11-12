//Array Method con Arrow Function

const tecnologias = ["HTML","CSS","JS","React", "NodeJS"]

const nuevoArray = tecnologias.map(tech => {
    if(tech === "HTML"){
        return "SQL"
    }else{
        return tech
    }
})

const nuevoArray2 = tecnologias.filter(tech => tech === "React")

console.log(nuevoArray)
console.log(nuevoArray2)