let playerScore = 0;
let computerScore = 0;

resultsDiv = document.querySelector('div.results');
scoreDiv = document.querySelector('div.score');
winnerDiv = document.querySelector('div.winner');

buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent, getComputerChoice()); 
    });
});

function playRound(playerSelection, computerSelection) {
    // make it case-insensitive
    playerSelection = playerSelection.toLowerCase();

    refreshDisplay();
    resultsDiv.textContent = `You chose ${playerSelection}, and I chose ${computerSelection}...`;
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
            updateScore("player");
            resultsDiv.textContent += `so you win!`;
            if (playerScore === 5) endGame("player");
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
                 playerSelection === "paper" && computerSelection === "scissors" ||
                playerSelection === "scissors" && computerSelection === "rock") {
                    updateScore("CPU");
                    resultsDiv.textContent += `so I win!`;
                    if (computerScore === 5) endGame("CPU");
    } else {
        resultsDiv.textContent += `it's a draw!`;
    }
}

function refreshDisplay() {
    resultsDiv.textContent = "";
    scoreDiv.textContent = `You: ${playerScore} | Me: ${computerScore}`;
    winnerDiv.textContent = "";
}

function updateScore(winCase) {
    switch (winCase) {
        case "player":
            playerScore++;
            break;
        case "CPU":
            computerScore++;
            break;
    }

    scoreDiv.textContent = `You: ${playerScore} | Me: ${computerScore}`;
}

function endGame(winCase) {
    switch (winCase) {
        case "player":
            winnerDiv.textContent = "You win the game! Thanks for playing!";
            break;
        case "CPU":
            winnerDiv.textContent = "I win the game! Wanna go another round?";
            break;
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