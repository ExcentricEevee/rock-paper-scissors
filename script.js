function game () {
    let computerSelection;
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
}

const playerSelection = "rock";

function playRound(playerSelection, computerSelection) {
    //make it case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // this doesn't really look pretty
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
    } 
    else if (playerSelection === "rock" && computerSelection === "paper" ||
                 playerSelection === "paper" && computerSelection === "scissors" ||
                playerSelection === "scissors" && computerSelection === "rock") {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `It's a draw! It was ${playerSelection} and ${computerSelection}`;
    }
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