// --- Constants & DOM references ---
const WINNING_SCORE = 5;
const CHOICES = ["rock", "paper", "scissors"];

// Each key beats its value. Looking up "rock" tells you what rock beats.
const BEATS = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const MESSAGES = {
  win: "You win the round!",
  lose: "You lose the round!",
  tie: "Tie!",
  humanWin: "Congratulations — you beat the machine!",
  computerWin: "You lost?! Sarah and John Connor died for nothing!",
};

const resultsEl = document.querySelector("#results");
const scoreEl = document.querySelector("#score");
const buttonsEl = document.querySelector(".rpsButtons");

// --- Game state (all mutable state lives in one place) ---
const state = {
  human: 0,
  computer: 0,
  gameOver: false,
};

// --- Game logic ---
function randomChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function judge(human, computer) {
  if (human === computer) return "tie";
  return BEATS[human] === computer ? "win" : "lose";
}

function playRound(humanChoice) {
  if (state.gameOver) return;

  const computerChoice = randomChoice();
  const result = judge(humanChoice, computerChoice);

  if (result === "win") state.human++;
  if (result === "lose") state.computer++;

  render(result);

  if (state.human >= WINNING_SCORE) endGame("humanWin");
  else if (state.computer >= WINNING_SCORE) endGame("computerWin");
}

// --- UI updates ---
function render(result) {
  resultsEl.textContent = MESSAGES[result];
  scoreEl.textContent = `You ${state.human} | Computer ${state.computer}`;
}

function endGame(winnerKey) {
  state.gameOver = true;
  resultsEl.textContent = MESSAGES[winnerKey];
  buttonsEl.querySelectorAll("button").forEach((b) => (b.disabled = true));

  const playAgain = document.createElement("button");
  playAgain.textContent = "Play Again";
  playAgain.addEventListener("click", () => resetGame(playAgain));
  resultsEl.after(playAgain);
}

function resetGame(playAgainBtn) {
  state.human = 0;
  state.computer = 0;
  state.gameOver = false;
  resultsEl.textContent = "";
  scoreEl.textContent = `You 0 | Computer 0`;
  buttonsEl.querySelectorAll("button").forEach((b) => (b.disabled = false));
  playAgainBtn.remove();
}

// --- Event wiring (one listener via event delegation) ---
buttonsEl.addEventListener("click", (e) => {
  if (e.target.matches("button[data-choice]")) {
    playRound(e.target.dataset.choice);
  }
});
