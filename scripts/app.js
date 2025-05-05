let newNum;
let attempts = 0;
const maxAttempts = 5;

let startGame = document.getElementById("start");
let guessBtn = document.getElementById("guessButton");
let resetBtn = document.getElementById("resetButton");
let userInput = document.getElementById("userGuess");
let output = document.getElementById("output");

startGame.addEventListener('click', (e) => {
    e.preventDefault();
    // Generate random number from 1 - 100
    newNum = Math.floor(Math.random() * 100) + 1;
    attempts = 0; // Reset attempts
    output.innerText = "Game started! Make your guess.";
});

guessBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (attempts >= maxAttempts) {
        output.innerText = "You've used all your attempts! Please restart the game.";
        return;
    }

    let convertToNumber = parseInt(userInput.value);
    attempts++;

    let message = "";

    if (newNum === convertToNumber) {
        message = "Got it! You guessed the number.";
    } else if (convertToNumber < newNum) {
        message = "The Number is too low";
        console.log("The Number is too low");
    } else {
        message = "The Number is too high";
        console.log("The Number is too high");
    }

    if (attempts === maxAttempts && convertToNumber !== newNum) {
        message += `\n❌ Game over. The correct number was ${newNum}.`;
    } else if (newNum !== convertToNumber) {
        const guessesLeft = maxAttempts - attempts;
        message += `\nYou have ${guessesLeft} guess${guessesLeft === 1 ? '' : 'es'} left.`;
    }

    output.innerText = message;
    userInput.value = '';
});

resetBtn.addEventListener("click", () => {
    userInput.value = '';
    output.innerText = "Game reset. Press 'Start' to play again.";
    attempts = 0;
    newNum = null;
    console.log("Game has been reset.");
});
