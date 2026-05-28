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

function playGame() {
   let humanScore = 0;
   let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
   
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      alert("You Win! Nice!!");
      humanScore++;
      return "win";
    } else if (humanChoice === computerChoice) {
      alert("Crazyyy, you tied?!");
      return "tie";
    } else {
      alert("You Lost Bucko!");
      computerScore++;
      return "lose";
    }
  }

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  console.log("Human:", humanSelection, "Computer:", computerSelection);
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log("Human:", humanSelection, "Computer:", computerSelection);
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log("Human:", humanSelection, "Computer:", computerSelection);
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log("Human:", humanSelection, "Computer:", computerSelection);
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  console.log("Human:", humanSelection, "Computer:", computerSelection);
  playRound(humanSelection, computerSelection);
  if (humanScore > computerScore) {
    alert(`You Rule!${humanScore} AI Drools!${computerScore}`) 
  } else if (computerScore > humanScore) {
    alert(`You're No John Connor!${humanScore} Loser!${computerScore}`)
  } else {
    alert(`A Tie Really?${humanScore} Booooo!${computerScore}`);
  }

  }

  

