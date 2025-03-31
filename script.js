
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultParagraph = document.querySelector(".result");
const yourScoreSpan = document.querySelector(".your-score span");
const computerScoreSpan = document.querySelector(".computer-score span");


let yourScore = 0;
let computerScore = 0;


function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}


function determineWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return "Draw!";
    }

    if (userChoice === 'rock') {
        if (compChoice === 'scissors') {
            yourScore++;
            return "You won!";
        } else {
            computerScore++;
            return "The computer win!";
        }
    }

    if (userChoice === 'paper') {
        if (compChoice === 'rock') {
            yourScore++;
            return "You won!";
        } else {
            computerScore++;
            return "The computer win!";
        }
    }

    if (userChoice === 'scissors') {
        if (compChoice === 'paper') {
            yourScore++;
            return "You won!";
        } else {
            computerScore++;
            return "The computer win!";
        }
    }
}


function updateScores() {
    yourScoreSpan.textContent = yourScore;
    computerScoreSpan.textContent = computerScore;
}


rockButton.addEventListener("click", () => {
    const userChoice = 'rock';
    const compChoice = computerChoice();
    const result = determineWinner(userChoice, compChoice);
    resultParagraph.textContent = `You chose rock, The computer chose ${compChoice}. ${result}`;
    updateScores();
});

paperButton.addEventListener("click", () => {
    const userChoice = 'paper';
    const compChoice = computerChoice();
    const result = determineWinner(userChoice, compChoice);
    resultParagraph.textContent = `You chose Paper, The computer chose ${compChoice}. ${result}`;
    updateScores();
});

scissorsButton.addEventListener("click", () => {
    const userChoice = 'scissors';
    const compChoice = computerChoice();
    const result = determineWinner(userChoice, compChoice);
    resultParagraph.textContent = `You chose Scissors, The computer chose ${compChoice}. ${result}`;
    updateScores();
});
