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

function playRound(humanChoice, computerChoice) {
 
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    alert("You Win! Nice!!");
    return "win";
  } else if (humanChoice === computerChoice) {
    alert("Crazyyy, you tied?!");
    return "tie";
  } else {
    alert("You Lost Bucko!");
    return "lose";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  if (playRound() = "win") {
    ++humanScore;
  } else if (playRound() = "lose") {
    ++computerScore;
  } else {
    
  }
  }



  

