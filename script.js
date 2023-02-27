function getComputerChoice() {
    const cpuChoice = "rock";
    const randomNumber = getRandomInteger(0, 2);

    console.log(randomNumber);
}

// min and max values are both included
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}