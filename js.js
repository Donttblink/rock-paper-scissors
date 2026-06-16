const results = document.querySelector("#results");
const score = document.querySelector("#score");
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const n = Math.floor(Math.random() * 3);
  if (n === 0) return "rock";
  if (n === 1) return "paper";
  return "scissors";
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else if (humanChoice === computerChoice) {
    return "tie";
  } else {
    return "lose";
  }
}

function updateDisplay(result) {
  if (result === "win") { 
    results.textContent = "You Win! Nice!!";
    humanScore++;
  } else if (result === "lose") {
    results.textContent = "Oof! Big L Bud";
    computerScore++;
  } else {
    results.textContent = "Yay....A tie...";

  }
}


document
  .querySelector("#rock")
  .addEventListener("click", () => {
    const result = playRound("rock", getComputerChoice());
    updateDisplay(result);
    score.textContent = `You ${humanScore} | Computer ${computerScore}`;
  });
document
  .querySelector("#paper")
  .addEventListener("click", () => {
    const result = playRound("paper", getComputerChoice());
    updateDisplay(result);
    score.textContent = `You ${humanScore} | Computer ${computerScore}`;
  });
  document
  .querySelector("#scissors")
  .addEventListener("click", () => {
    const result = playRound("scissors", getComputerChoice());
    updateDisplay(result);
    score.textContent = `You ${humanScore} | Computer ${computerScore}`;
  });
