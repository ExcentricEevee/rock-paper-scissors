let playerScore = 0;
let computerScore = 0;

function game () {
    let computerSelection;
    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
    console.log("The game is over, which means...")
    console.log(checkForWin());
}

function playRound(playerSelection, computerSelection) {
    //make it case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // this doesn't really look pretty
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++;
            return `You win the round!! ${playerSelection} beats ${computerSelection}.
                    The score is now ${playerScore} to ${computerScore}`;
    } 
    else if (playerSelection === "rock" && computerSelection === "paper" ||
                 playerSelection === "paper" && computerSelection === "scissors" ||
                playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            return `You lose the round! ${computerSelection} beats ${playerSelection}
                    The score is now ${playerScore} to ${computerScore}`;
    } else {
        return `It's a draw! It was ${playerSelection} and ${computerSelection}`;
    }
}

function checkForWin() {
    if (playerScore > computerScore) {
        return "You win the game! Thanks for playing!";
    } else if (computerScore > playerScore) {
        return "I win the game! Yeehaw!";
    }   else {
        return "There's no winner?! Let's play again!";
    }
}

function getPlayerChoice() {
    return prompt("Rock, Paper, or Scissors?", "Scissors");
}

function getComputerChoice() {
    const randomNumber = getRandomInteger(0, 2);

    let gameChoice;
    switch (randomNumber) {
        case 0:
            gameChoice = "rock";
            break;
        case 1:
            gameChoice = "paper";
            break;
        case 2:
            gameChoice = "scissors";
            break;
    }

    return gameChoice;
}

// min and max values are both included
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}