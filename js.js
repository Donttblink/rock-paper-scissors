function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  if (randomNumber <= 33) {
    return "rock";
  } else if (randomNumber >= 34 && randomNumber <= 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Choose Your Character; Rock, Paper, Scissors");
  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
 
  if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
  humanScore++;
  return "You Win! Nice!";
  } else if (humanChoice === computerChoice) {
    return "Crazyyy, you tied?!";
  } else {
    computerScore++;
    return "You Lost Bucko!";
  }
}


  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);