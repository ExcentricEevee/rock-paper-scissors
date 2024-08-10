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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won the whole game!");
    } else if (computerScore < humanScore) {
        console.log('The computer wins this time!')
    } else {
        console.log('It ends in a tie!')
    }
    console.log(`Your score: ${humanScore} | CPU score: ${computerScore}`)

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
}