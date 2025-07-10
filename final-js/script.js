const randomWordDisplay = document.getElementById('randomWord');
const textInput = document.getElementById('text');
const timeSpan = document.getElementById('timeSpan');
const scoreSpan = document.getElementById('score');
const endGameContainer = document.getElementById('end-game-container');
const mainContainer = document.querySelector('.main');

const words = [
    'early',
    'number',
    'inside',
    'again',
    'love',
    'enough',
    'speak',
    'drink',
    'sleep',
    'write',
    'read',
];

let randomWord;
let time = 10; 
let score = 0; 
let timeInterval;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function addToDOM() {
    randomWord = getRandomWord();
    randomWordDisplay.innerHTML = randomWord;
}

function updateTime() {
    time--; 
    timeSpan.innerHTML = `${time}s`; 

    if (time === 0) { 
        clearInterval(timeInterval); 
        gameOver(); 
    }
}

function updateScore() {
    score++; 
    scoreSpan.innerHTML = score; 
}

function gameOver() {
    mainContainer.classList.add('hidden');  
    endGameContainer.style.display = 'flex'; 
    endGameContainer.innerHTML = `
        <h2>¡Te quedaste sin tiempo!</h2> <p>Tu puntaje final es: ${score}</p> <button onclick="location.reload()">Volvé a empezar</button> `;
}

textInput.addEventListener('input', (e) => {
    const enteredWord = e.target.value; 

    if (enteredWord === randomWord) { 
        time += 3; 
        textInput.value = ''; 
        addToDOM(); 
        updateScore();  
    }
});

addToDOM();
timeInterval = setInterval(updateTime, 1000);