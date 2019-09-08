let playerScore = 0;
let computerScore = 0;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);

const container = document.querySelector('#container');
const resultMessage = document.querySelector('#result');
const winMessage = document.querySelector('#winner');
const paraMessage = document.createElement('p');

const paraScore = document.createElement('p');
paraScore.textContent = `Player: ${playerScore}\nComputer: ${computerScore}`;
container.appendChild(paraScore);



function getRndInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function computerPlay ()
{
  let rndNumber = getRndInt(0, 2);
  let choice = "";

  if (rndNumber == 0)
  {
    return choice = "Rock";
  }
  else if (rndNumber == 1)
  {
    return choice = "Paper";
  }
  else
  {
   return choice = "Scissors";
  }
}


function playRound(e, playerSelection, computerSelection)
{
  playerSelection = e.target.value;
  computerSelection = computerPlay();

  console.log(`You play ${playerSelection}...`);
  console.log(`I play ${computerSelection}...\n`);

  winMessage.textContent = "";

  let gameResult = ``;
  if ((playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") || (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") || (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"))
  {
    playerScore++;
    updateDisplay();
    resultMessage.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  else if ((computerSelection.toLowerCase() == "rock" && playerSelection.toLowerCase() == "scissors") || (computerSelection.toLowerCase() == "paper" && playerSelection.toLowerCase() == "rock") || (computerSelection.toLowerCase() == "scissors" && playerSelection.toLowerCase() == "paper"))
  {
    computerScore++;
    updateDisplay();
    resultMessage.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
  else {
    resultMessage.textContent = "It's a tie!";
  }
}

function updateDisplay()
{
  paraScore.textContent = `Player: ${playerScore}\nComputer: ${computerScore}`;

  if(playerScore == 5)
  {
    winMessage.textContent = "You got 5 points and won the game!";

    playerScore = 0;
    computerScore = 0;
  }
  else if(computerScore == 5)
  {
    winMessage.textContent = "The PC got 5 points and wins the game!";

    playerScore = 0;
    computerScore = 0;
  }
}

/*function showResults()
{
  console.log("After five rounds, the results are in...\n");
  showScore();
  
  if (playerScore > computerScore)
  {
    console.log("Congrats, you've won the game!");
  }
  else if (computerScore > playerScore)
  {
    console.log("Looks like the Computer won this one, feel free to try again!");
  }
  else
  {
    console.log("Seems we've ended in a tie somehow, that's lame!");
  }
}*/