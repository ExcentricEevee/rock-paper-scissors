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

function playRound(humanChoice, computerChoice) {
    // make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (computerChoice === 'rock' && humanChoice === 'scissors' ||
        computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else {
        console.log(`It\'s a tie! It was ${humanChoice} and ${computerChoice}`);
    }
}

function checkWinCondition() {
    if (humanScore > computerScore) {
        console.log("You won the whole game!");
    } else if (computerScore < humanScore) {
        console.log('The computer wins this time!')
    } else {
        console.log('It ends in a tie!')
    }
    console.log(`Your score: ${humanScore} | CPU score: ${computerScore}`)
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.textContent;
        playRound(humanChoice, getComputerChoice());
    });
});

let humanScore = 0;
let computerScore = 0;