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

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  score.textContent ="";
  results.textContent = "";
  document.querySelectorAll(".rpsButtons button").forEach((b) => { 
    b.disabled = false;
  })
  results.removeChild(reset);
}
function endGame(winner) {
  if (winner === "human") {
    results.textContent = "Congratulations! You Beat the machine!!!";
  } else if (winner === "computer") {
    results.textContent = "You Lost?! Sarah and John Connor Died for Nothing!";
  }
  document.querySelectorAll(".rpsButtons button").forEach((b) => {
    b.disabled = true;
  });
  const reset = document.createElement("button");
  reset.textContent = "Play Again?";
  results.appendChild(reset);
  reset.addEventListener("click", resetGame);
}

document.querySelectorAll(".rpsButtons button").forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, getComputerChoice());
    updateDisplay(result);
    score.textContent = `You ${humanScore} | Computer ${computerScore}`;
    if (humanScore === 5) endGame("human");
    else if (computerScore === 5) endGame("computer");
  });
});
