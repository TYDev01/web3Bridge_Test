// Generate random numbers from 1 - 100

let newNum = Math.floor(Math.random() * 100) + 1;

console.log(newNum);

// Get the user numbe rinput
let guessBtn = document.getElementById("guessButton");

guessBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let userNumber = document.getElementById("userGuess");
    let convertToNumber = parseInt(userNumber.value);
    console.log(convertToNumber)
})
