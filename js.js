function getComputerChoice() {
  const n = Math.floor(Math.random() * 3);
  if (n === 0) return "rock";
  if (n === 1) return "paper";
  return "scissors";
}

const computerChoice = getComputerChoice();

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

const rock = document.querySelector("#rock");
 btn.addEventListener("click", playRound);