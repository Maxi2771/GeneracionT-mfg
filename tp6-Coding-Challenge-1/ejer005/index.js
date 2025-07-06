/*
Escribí una función que recibe un arreglo de objetos como parámetro y
que tiene la propiedad nombre y edad.
Esta función debe devolver el mismo arreglo de objetos con una
propiedad adicional que indica el año en el que nació.
Test: [{nombre: "Juan", edad:19},{nombre:"Mario", edad: 22}]
*/

function CalculateYearOfBirth(people){
    const currentYear = new Date().getFullYear()
    for (let i = 0; i < people.length; i++) {
        const person = people[i]
        const yearOfBirth = currentYear - person.edad
        person.yearOfBirth = yearOfBirth
    }
    return people
}

let testPeople = [
    {nombre: "Juan", edad:19},
    {nombre: "Mario", edad: 22},
    {nombre: "Ana", edad: 25}
]

console.log("Array original:")
console.log(testPeople)

const peopleWithYearOfBirth = CalculateYearOfBirth(testPeople)

console.log("\n Array con año de nacimiento:")
console.log(peopleWithYearOfBirth)