let computerSelection;
let playerSelection;
let winner;
let computerScore;
let playerScore;
let count;
let winnerTextContent;
let gameOverText;

const playAgain = document.querySelector("#playAgain");
const gameOver = document.getElementById("gameOver");
const allButtons = document.getElementsByClassName("choice");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const winnerText = document.getElementById("winner");

rockButton.addEventListener('click', chooseRock);
paperButton.addEventListener('click', choosePaper);
scissorsButton.addEventListener('click', chooseScissors);
playAgain.addEventListener('click', newGame);

init();

function init() {
    playAgain.classList.add("hidden");
    clearScores();
    count = 0;
}

function newGame() {
    init();
    winnerText.textContent = "";
    gameOver.textContent = "";
    updateScores();
}

function chooseRock() {
    playerSelection = "rock";
    playGame();
}

function choosePaper() {
    playerSelection = "paper";
    playGame();
}

function chooseScissors() {
    playerSelection = "scissors";
    playGame();
}

function playGame() {
    if (count < 4) {
        playRound();
        updateScores();
        count++;
    } else if (count < 5) {
        playRound();
        updateScores();
        count++;
        playAgain.classList.remove("hidden");
        // Change text to say Game Over and announce winner.
        if (playerScore > computerScore) {
            gameOverText = "Game over. You win!";
            gameOver.textContent = gameOverText;
        } else if (computerScore > playerScore) {
            gameOverText = "Game over. Better luck next time. Sucker.";
            gameOver.textContent = gameOverText;
        } else {
            gameOverText = "A perfect tie?! We'd better play again."
            gameOver.textContent = gameOverText;
        }
    }
}

function clearScores() {
    computerScore = 0;
    playerScore = 0;
}

function playRound() {
    //playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    computerPlay();
    compareSelections(computerSelection, playerSelection);

    console.log("player: " + playerSelection + " | computer: " + computerSelection + " | winner: " + winner);
    console.log(playerScore + " | " + computerScore);
    return winner;
}

//Compare selections and determine winner
function compareSelections(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        playerScore++;
        computerScore++;
        winnerTextContent = computerSelection + " vs " + playerSelection + ". It's a tie."
        return winner = "It's a tie";
    } else if (
        (computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "rock")) {
        playerScore++;
        winnerTextContent = playerSelection + " beats " + computerSelection + ". You win!"
        return winner = "Player wins";
    } else {
        computerScore++;
        winnerTextContent = computerSelection + " beats " + playerSelection + ". Computer wins."
        return winner = "Computer wins";
    }
}

function capitalizeFirstLetter() {
    winnerTextContent = winnerTextContent.charAt(0).toUpperCase() + winnerTextContent.slice(1);
}

function updateScores() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    capitalizeFirstLetter();
    winnerText.textContent = winnerTextContent;
}

// Computer randomly chooses rock, paper, or scissors
function computerPlay() {
    let computerRandomNum = getRandomInt(3);
    switch (computerRandomNum) {
        case 0:
            return computerSelection = "rock";
            break;
        case 1:
            return computerSelection = "paper";
            break;
        case 2:
            return computerSelection = "scissors";
            break;
        default:
            console.log("Oops. Something went wrong.")
    }
}

// Generate a random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
