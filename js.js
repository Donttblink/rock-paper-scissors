function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  if (randomNumber <= 33) {
    return "Rock";
  } else if (randomNumber >= 33 && randomNumber<= 64) {
    return "Paper";
  } else {
    return "Scissors";
  }
}