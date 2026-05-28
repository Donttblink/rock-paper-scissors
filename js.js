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
  alert("You Win! Nice!!")
  return "win";
  } else if (humanChoice === computerChoice) {
    alert("Crazyyy, you tied?!");
    return "tie";
  } else {
    computerScore++;
    alert("You Lost Bucko!");
    return "lose";
  }
}


function playGame() {
  let rounds = 0;
  playRound(humanSelection, computerSelection);
  if (playRound() === "win" || "lose" || "tie") {
    rounds++;
    alert(humanScore && computerScore);
  }else {
    alert ("Game Over!")

  }

  }

 
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



