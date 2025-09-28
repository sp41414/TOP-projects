let humanScore = 0;
let computerScore = 0;

const rockUI = document.getElementById("rock");
const paperUI = document.getElementById("paper");
const scissorsUI = document.getElementById("scissors");
const playerScoreUI = document.getElementById("playerScore");
const computerScoreUI = document.getElementById("computerScore");
const winnerText = document.getElementById("winner");
const restartButton = document.getElementById("restart");
restartButton.onclick = () => window.location.reload();

function getComputerSelection() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "scissors";
  } else {
    return "ERROR";
  }
}

function playRound(humanChoice, computerChoice) {
  if (computerChoice == "scissors" && humanChoice == 1) {
    computerScore++;
    computerScoreUI.textContent = `Computer Chose Scissors! Computer Score: ${computerScore}`;
    playerScoreUI.textContent = `You Chose Paper! Your Score: ${humanScore}`;
  } else if (computerChoice == "paper" && humanChoice == 0) {
    computerScore++;
    computerScoreUI.textContent = `Computer Chose Paper! Computer Score: ${computerScore}`;
    playerScoreUI.textContent = `You Chose Rock! Your Score: ${humanScore}`;
  } else if (computerChoice == "rock" && humanChoice == 2) {
    computerScore++;
    computerScoreUI.textContent = `Computer Chose Rock! Computer Score: ${computerScore}`;
    playerScoreUI.textContent = `You Chose Scissors! Your Score: ${humanScore}`;
  } // Player Wins Scenario
  else if (humanChoice == 2 && computerChoice == "paper") {
    humanScore++;
    computerScoreUI.textContent = `Computer Chose Paper! Computer Score: ${computerScore}`;
    playerScoreUI.textContent = `You Chose Scissors! Your Score: ${humanScore}`;
  } else if (humanChoice == 1 && computerChoice == "rock") {
    humanScore++;
    computerScoreUI.textContent = `Computer Chose Rock! Computer Score: ${computerScore}`;
    playerScoreUI.textContent = `You Chose Paper! Your Score: ${humanScore}`;
  } else if (humanChoice == 0 && computerChoice == "scissors") {
    humanScore++;
    computerScoreUI.textContent = `Computer Chose Scissors! Computer Score: ${computerScore}`;
    playerScoreUI.textContent = `You Chose Rock! Your Score: ${humanScore}`;
  }
  // DRAW Scenario
  else {
    computerScoreUI.textContent = `DRAW! Computer Score: ${computerScore}`;
    playerScoreUI.textContent = `DRAW! Your Score: ${humanScore}`;
  }
  // Winner
  if (humanScore >= 5 || computerScore >= 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    if (humanScore > computerScore) {
      const resultsContainer = document.getElementById("results-container");
      resultsContainer.style.display = "flex";
      winner.textContent = "You Won!";
    } else if (computerScore > humanScore) {
      const resultsContainer = document.getElementById("results-container");
      resultsContainer.style.display = "flex";
      winner.textContent = "You Lose!";
    } else if (computerScore == humanScore) {
      const resultsContainer = document.getElementById("results-container");
      resultsContainer.style.display = "flex";
      winner.textContent = "DRAW!";
    }
  }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => {
  playRound(0, getComputerSelection());
});
paperButton.addEventListener("click", () => {
  playRound(1, getComputerSelection());
});
scissorsButton.addEventListener("click", () => {
  playRound(2, getComputerSelection());
});
