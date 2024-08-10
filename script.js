let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    return prompt('Rock, Paper, or Scissors?');
}

function playRound(humanChoice, computerChoice) {
    // make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else if (computerChoice === 'rock' && humanChoice === 'scissors' ||
        computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    } else {
        console.log('It\'s a tie!');
    }
}
