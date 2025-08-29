//FizzBuzz 
for(i=1; i<=100; i++){
    console.log( i % 3 == 0  && i % 5 == 0 ? `FizzBuzz ${i}` : i % 3 == 0 ? `Fizz ${i}` : i % 5 == 0 ? `Buzz ${i}` : i.toString());
}

//FizzBuzz 2
function fornums(word1, word2, num1, num2, num3){
    let numberF = []
    for (let i = 1; i<=num3; i++){
        i % num1 == 0 && i % num2 == 0 ? numberF.push(`${word1 + word2} ${i}`) : i % num1 == 0 ? numberF.push(`${word1} ${i}`) : i % num2 == 0 ? numberF.push(`${word2} ${i}`) : numberF.push(`${i.toString()}`)
    }
    return numberF.join(',')
}

let num1, num2, num3
let word1, word2

word1 = prompt("Ingresa la primera palabra: ")
word2 = prompt("Ingresa la segunda palabra: ")
num1 = parseInt(prompt("Ingrese el primer número multiplo: "))
num2 = parseInt(prompt("Ingrese el segundo número multiplo: "))
num3 = parseInt(prompt("Ingresa el número hasta el que desea llegar: "))
console.log("------------------------------")
console.log(fornums(word1, word2, num1, num2, num3))