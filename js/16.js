//Arrays Methods

const tecnologias = ["HTML","CSS","JS","React", "NodeJS"]
const numeros = [10, 20, 30]
let nuevoArray;


//FILTER
const nuevoArray2 = tecnologias.filter(tech => tech === "React")

const resultado = tecnologias.includes("SQL") //Comprobar si un elemento existe en el array

const resultado1 = numeros.some(numero => numero > 15) //True o false si se cumple la condicion en le array en almenos uno

const resultado2 = numeros.find(numero => numero > 15) //Ejecuta hasta que se cumpla la condicon es decir primer munero del array que sea mayor a 5

const resultado3 = numeros.every(numero => numero > 15)//True o false si todos cumplen o no cumplen la condicion

const resultado4 = numeros.reduce((total, numero) => numero + total, 0)
//total es le acumalo, numnero es cada uno del array, funcion, numero que inicia. ACUMULA EN EL TOTAL

const resultado5 = tecnologias.filter(tech => tech === "React") //Crea un array en base a una condicions

const resultado6 = tecnologias.forEach((tech,index) => console.log(index)) // Realiza un proceso por cada elemento del array

const arrayMap = tecnologias.map(tech => tech) // Crea un nuevo array

console.log(arrayMap)