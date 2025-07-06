/*
Creá una función que evalúe el rendimiento de un alumno en un
examen.
0 - 2 -> Muy mal
2 - 5 -> Mal
5 - 6 -> Tan cerca pero tan lejos
6 - 8 -> Bien!
8 - 10 -> Muy bien!!
*/
function Evaluar (num1) {
    num1 >= 0 && num1 <=2 ? console.log(`Muy mal ${num1}`) : num1 > 2 && num1 <= 5 ? console.log(`Mal ${num1}`) : num1 > 5 && num1 <= 6 ? console.log(`Tan cerca pero tan lejos ${num1}`) : num1 > 6 && num1 <= 8 ? console.log(`Bien! ${num1}`) : console.log(`Muy bien!! ${num1}`);
}

num1 = parseInt(prompt("Ingresar un número entre 0 y 10: "))
Evaluar(num1)