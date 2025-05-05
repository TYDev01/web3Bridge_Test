let newNum;
let attempts = 0;
const maxAttempts = 5;

let startGame = document.getElementById("start");
let guessBtn = document.getElementById("guessButton");

startGame.addEventListener('click', (e) => {
    e.preventDefault();
    // Generate random number from 1 - 100
    newNum = Math.floor(Math.random() * 100) + 1;
    attempts = 0; // Reset attempts
    console.log("New number:", newNum);
});

guessBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (attempts >= maxAttempts) {
        console.log("You've used all your attempts! Please restart the game.");
        return;
    }

    let userNumber = document.getElementById("userGuess");
    let convertToNumber = parseInt(userNumber.value);
    attempts++;
    console.log(`Attempt ${attempts}: ${convertToNumber}`);

    if (newNum === convertToNumber) {
        console.log("🎉 Got it! You guessed the number.");
    } else if (convertToNumber < newNum) {
        console.log("The Number is too low");
    } else {
        console.log("The Number is too high");
    }

    if (attempts === maxAttempts && convertToNumber !== newNum) {
        console.log(`❌ Game over. The correct number was ${newNum}.`);
    }
});
