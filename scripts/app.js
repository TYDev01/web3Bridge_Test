
let newNum;


let startGame = document.getElementById("start")

startGame.addEventListener('click', (e)=>{
    e.preventDefault()
    // Generate random numbers from 1 - 100
    newNum = Math.floor(Math.random() * 100) + 1
    console.log(newNum);


});

// Get the user numbe rinput
let guessBtn = document.getElementById("guessButton");

guessBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let userNumber = document.getElementById("userGuess");
    let convertToNumber = parseInt(userNumber.value);
    console.log(convertToNumber);

    if (newNum === convertToNumber) {
        console.log("Got it");
    }else if (convertToNumber < newNum) {
        console.log("Number is too low")
    } else {
        console.log("Number is too high")
    }
});
