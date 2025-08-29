let numSquares = 6;
let colors = [];
let pickedColor;

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const h1 = document.querySelector("h1");
const resetButton = document.getElementById("reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    modeButtons.forEach(button => {
        button.addEventListener("click", function () {
            modeButtons.forEach(b => b.classList.remove("selected"));
            this.classList.add("selected");
            numSquares = (this.textContent === "Easy") ? 3 : 6;
            reset();
        });
    });
}

function setupSquares() {
    squares.forEach(square => {
    square.addEventListener("click", function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "¡Correcto!";
            resetButton.textContent = "Jugar de nuevo?";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "#c4dafa";
            messageDisplay.textContent = "Intentalo nuevamente";
        }
        });
    });
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "Nuevos Colores";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#005187";
    squares.forEach((square, i) => {
        if (colors[i]) {
            square.style.display = "block";
            square.style.backgroundColor = colors[i];
        } else {
            square.style.display = "none";
            }
    });
}

resetButton.addEventListener("click", reset);

function changeColors(color) {
    squares.forEach(square => square.style.backgroundColor = color);
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
