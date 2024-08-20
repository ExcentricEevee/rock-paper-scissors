function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    // make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    if (isNewGame()) {
        humanScore = 0;
        computerScore = 0;
        const winner = document.querySelector('.winner');
        winner.textContent = '';
    }

    const results = document.querySelector('.results');
    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        results.textContent = (`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (computerChoice === 'rock' && humanChoice === 'scissors' ||
        computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissors' && humanChoice === 'paper') {
        results.textContent = (`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else {
        results.textContent = (`It\'s a tie! It was ${humanChoice} and ${computerChoice}`);
    }

    displayScore();
    checkWinCondition();
}

function displayScore() {
    const score = document.querySelector('.score');
    score.textContent = `You: ${humanScore} | CPU: ${computerScore}`;
}

function checkWinCondition() {
    const winner = document.querySelector('.winner');
    if (humanScore >= 5) winner.textContent = "You won!"
    else if (computerScore >= 5) winner.textContent = "The CPU won!"
}

function isNewGame() {
    return (humanScore >= 5 || computerScore >= 5);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.textContent;
        playRound(humanChoice, getComputerChoice());
    });
});
