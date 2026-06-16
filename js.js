function getComputerChoice() {
  const n = Math.floor(Math.random() * 3);
  if (n === 0) return "rock";
  if (n === 1) return "paper";
  return "scissors";
}

function playRound(humanChoice, computerChoice) {
  const score = document.createElement("div");
  const result = document.createElement("p");

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
  score.appendChild(result);
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
