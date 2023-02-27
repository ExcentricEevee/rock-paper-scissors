function getComputerChoice() {
    const randomNumber = getRandomInteger(0, 2);

    let gameChoice;
    switch(randomNumber) {
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