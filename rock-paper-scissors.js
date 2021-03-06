
let playerScore = 0;
let computerScore = 0;


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


function playRound(playerSelection, computerSelection)
{
  playerSelection = prompt("Rock, Paper, Scissors?");
  computerSelection = computerPlay();

  console.log(`You play ${playerSelection}...`);
  console.log(`I play ${computerSelection}...\n`);

  let gameResult = ``;
  if ((playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") || (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") || (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"))
  {
    playerScore++;
    return gameResult = (`You win! ${playerSelection} beats ${computerSelection}.`);
  }
  else if ((computerSelection.toLowerCase() == "rock" && playerSelection.toLowerCase() == "scissors") || (computerSelection.toLowerCase() == "paper" && playerSelection.toLowerCase() == "rock") || (computerSelection.toLowerCase() == "scissors" && playerSelection.toLowerCase() == "paper"))
  {
    computerScore++;
    return gameResult = (`You lose! ${computerSelection} beats ${playerSelection}.`);
  }
  else if ((playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock") || (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper") || (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissors"))
  {
    console.log(`It's a draw! You both played ${computerSelection}, so do this round over.`);
    console.log(playRound());
  }
  else
  {
    console.log("I didn't understand what you said! Please try again.");
    console.log(playRound());
  }
}


function showScore()
{
  console.log(`Player: ${playerScore} points`);
  console.log(`Computer: ${computerScore} points`);
}


function showResults()
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
}


function game()
{
  for (let i = 0; i < 5; i++)
  {
    console.log(playRound());
    showScore();
  }
    showResults();
}

