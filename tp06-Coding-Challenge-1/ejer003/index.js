/*
Dado un arreglo de objetos con frutas y verduras:
let frutasYVerduras =
[{fruta:"banana"},{verdura:"apio"},{fruta:"manzana"},{fruta:"frutilla"},{verdura:"zanahori
a"},{fruta:"kiwi"},{fruta:"sandia"},{fruta:"melon"},{verdura:"repollo"},{fruta:"mango"}]
Creá una función que filtre por las frutas y retorne el siguiente valor:
{frutas:['banana', 'manzana', 'frutilla', 'kiwi', 'sandia', 'melon', 'mango']}
*/

function filterFruits(array){
    let foundFruits = []
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        if( item.hasOwnProperty('fruta') ){
            foundFruits.push(item.fruta)
        }
    }
    return {frutas: foundFruits}
}

let frutasYVerduras = [
    {fruta:"banana"},
    {verdura:"apio"},
    {fruta:"manzana"},
    {fruta:"frutilla"},
    {verdura:"zanahoria"},
    {fruta:"kiwi"},
    {fruta:"sandia"},
    {fruta:"melon"},
    {verdura:"repollo"},
    {fruta:"mango"}
]

console.log(filterFruits(frutasYVerduras))