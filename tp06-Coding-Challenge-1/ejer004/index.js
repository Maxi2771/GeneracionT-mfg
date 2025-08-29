/**
Creá una función dispenserGaseosas que tome dos arreglos como parámetros. A
partir de estos, se pide crear un objeto gaseosasEnStock.
Mediante este objeto consultaremos si la gaseosa que quiere el cliente está en
stock.
let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];
*/

function dispenserGaseosas(units, sodas) {
    let sodasInStock = {}
    for (let i = 0; i < sodas.length; i++) {
        const nameSoda = sodas[i]
        const sodasStock = units[i]
        sodasInStock[nameSoda] = sodasStock
    }
    return sodasInStock
}

let units = [1, 2, 3, 4];
let sodas = ["cocaCola", "sprite", "fanta", "sevenUp",]
const currentStock = dispenserGaseosas(units, sodas)

console.log("Gaseosas en Stock")
console.log(currentStock)