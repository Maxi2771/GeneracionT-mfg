/*
Creá una función que reciba como parámetros dos números y una
palabra.
Si hay un número más grande que otro retorna el más alto. En
caso de que sean iguales retorna la inicial y la última letra del
tercer parámetro.
biggestOne(16,2,"Haz") // 16
biggestOne(3,3,"Haz") // Hz
*/

function biggestOne(num1, num2, word) {
    if (num1 === num2 ){
        return word[0] + word[word.length - 1];
    }else {
        return Math.max(num1, num2);
    }
}

num1 = parseInt(prompt("Ingresar 1er número: "))
num2 = parseInt(prompt("Ingresar 2do número: "))
word = prompt("Ingresar palabra: ")
if( isNaN(num1) || isNaN(num2) || typeof word !== "string" || word.length === 0 ){
    alert("Error, los datos ingresados no son válidos")
}else {
    console.log(biggestOne(num1, num2, word))
}