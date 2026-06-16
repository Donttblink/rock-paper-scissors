const results = document.querySelector("#results");
const score = document.querySelector("#score");

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
if (playRound === win) {
  results.textContent = "You Win!Nice!"
} else if (playRound === lose) {
  results.textContent = "Really? You Lost?!"
} else {
  results.textContent = "wow. nice. a tie."
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
