const scoreUI = document.getElementById("score");
const computerScoreUI = document.getElementById("computerScore");
const resultUI = document.getElementById("results");
function getComputerChoice() {
  // gets random number between 0 and 2
  let choice = Math.floor(Math.random() * 3);
  // returns randomly generated choice from rock -> scissors (0 -> 2)
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "scissors";
  } else {
    return;
  }
}

function getHumanChoice() {
  let humanChoice = parseInt(
    prompt("Enter a number between 0-2 (0, Rock) (1, Paper), (2, Scissors)"),
  );
  while (humanChoice > 2 || humanChoice < 0) {
    alert("Invalid Input!");
    humanChoice = parseInt(
      prompt("Enter a number between 0-2 (0, Rock) (1, Paper), (2, Scissors)"),
    );
  }
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // Computer Wins Scenario
  if (computerChoice == "scissors" && humanChoice == 1) {
    computerScore++;
    alert(
      `Computer Chose Scissors, You Chose Paper!\nYour score: ${humanScore}\nComputer's score: ${computerScore}`,
    );
  } else if (computerChoice == "paper" && humanChoice == 0) {
    computerScore++;
    alert(
      `Computer Chose Paper, You Chose Rock!\nYour score: ${humanScore}\nComputer's score: ${computerScore}`,
    );
  } else if (computerChoice == "rock" && humanChoice == 2) {
    computerScore++;
    alert(
      `Computer Chose Rock, You Chose Scissors!\nYour score: ${humanScore}\nComputer's score: ${computerScore}`,
    );
  } // Player Wins Scenario
  else if (humanChoice == 2 && computerChoice == "paper") {
    humanScore++;
    alert(
      `Computer Chose Paper, You Chose Rock!\nYour score: ${humanScore}\nComputer's score: ${computerScore}`,
    );
  } else if (humanChoice == 1 && computerChoice == "rock") {
    humanScore++;
    alert(
      `Computer Chose Rock, You Chose Paper!\nYour score: ${humanScore}\nComputer's score: ${computerScore}`,
    );
  } else if (humanChoice == 0 && computerChoice == "scissors") {
    humanScore++;
    alert(
      `Computer Chose Scissors, You Chose Rock!\nYour score: ${humanScore}\nComputer's score: ${computerScore}`,
    );
  }
  // DRAW Scenario
  else {
    alert(
      `DRAW!\nYour score: ${humanScore}\nComputer's score: ${computerScore}`,
    );
  }
  scoreUI.textContent = `Your Score: ${humanScore}`;
  computerScoreUI.textContent = `Computer Score: ${computerScore}`;
}

let rounds = parseInt(prompt("How many rounds would you like to play?"));
while (rounds <= 0) {
  rounds = parseInt(prompt("How many rounds would you like to play?"));
}

function playGame(rounds) {
  let round = 0;
  let humanChoice = null;
  let computerChoice = null;
  while (round < rounds) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    round++;
    console.log(`Round: ${round}`);
  }
  if (humanScore > computerScore) {
    resultUI.textContent = "You Win!";
  } else if (computerScore > humanScore) {
    resultUI.textContent = "You Lose!";
  } else if (humanScore == computerScore) {
    resultUI.textContent = "Draw!";
  } else {
    resultUI.textContent = "Unhandled Condition! Something went wrong!";
  }
}

playGame(rounds);
