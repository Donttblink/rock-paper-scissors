const results = document.querySelector("#results");

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
    results.textContent = "You Win! Nice!!";
    humanScore++;
    return "win";
  } else if (humanChoice === computerChoice) {
    results.textContent = "Crazyyy, you tied?!";
    return "tie";
  } else {
    results.textContent = "You Lost Bucko!";
    computerScore++;
    return "lose";
  }
}

document
  .querySelector("#rock")
  .addEventListener("click", () => playRound("rock", getComputerChoice()));
document
  .querySelector("#paper")
  .addEventListener("click", () => playRound("paper", getComputerChoice()));
document
  .querySelector("#scissors")
  .addEventListener("click", () => playRound("scissors", getComputerChoice()));
