import Player from "./player.js";

// initialize the players
let computerPlayer = new Player("computer");
let player = new Player();

let gameState = {
  gameStarted: false,
  playerTurn: true,
  gameOver: false,
};

const gameContainer = document.querySelector(".game-area");
const playerGameGrid = document.querySelector(".player-board-container");
const computerGameGrid = document.querySelector(".computer-board-container");

const statusDiv = document.createElement("div");

statusDiv.id = "status";
statusDiv.textContent = "Click on Start Game to randomly generate your ships!";
document.body.insertBefore(statusDiv, gameContainer); // so that the status text is above the two grids

const gridComputerCells = document.createElement("div");
gridComputerCells.className = "grid";
gridComputerCells.style.cssText = `
    display: grid;
    grid-template-columns: repeat(${computerPlayer.size}, 1fr);
`;

const gridPlayerCells = document.createElement("div");
gridPlayerCells.className = "grid";
gridPlayerCells.style.cssText = `
    display: grid;
    grid-template-columns: repeat(${player.size}, 1fr);
`;

// create the cells for the two grids ^^
function createGrid(container, size, type) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div");
      // identify hit coordinates using this:
      cell.id = `${type}-${i}-${j}`;
      cell.className = "cell";
      cell.dataset.x = i;
      cell.dataset.y = j;
      cell.dataset.type = type;
      container.appendChild(cell);
    }
  }
}

createGrid(gridComputerCells, computerPlayer.size, "computer");
createGrid(gridPlayerCells, player.size, "player");

computerGameGrid.appendChild(gridComputerCells);
playerGameGrid.appendChild(gridPlayerCells);

function placeShip(gameBoard) {
  const shipLengths = [5, 4, 3, 3, 3, 2];

  shipLengths.forEach((length) => {
    try {
      // calculates random position (cursed battleships where every ship is
      // vertical)
      const x = Math.floor(Math.random() * (gameBoard.size - length));
      const y = Math.floor(Math.random() * (gameBoard.size - length));
      gameBoard.placeShip(length, [x, y]);
    } catch (e) {
      console.log("Failed placement, trying again: ", e);
      placeShip(gameBoard);
    }
  });
}

// GAME START: Ship placement ("Cycle random ship placement button")
const placeShipButton = document.createElement("button");
placeShipButton.id = "randomize";
placeShipButton.textContent = "Start Game";
placeShipButton.addEventListener("click", () => {
  placeShip(player.gameBoard);
  placeShip(computerPlayer.gameBoard);
  gameState.gameStarted = true;
  statusDiv.textContent = "Click on computer's board to attack!";

  player.gameBoard.ships.forEach((ship) => {
    ship.positions.forEach(([x, y]) => {
      const cell = document.getElementById(`player-${x}-${y}`);
      cell.classList.add("ship");
      placeShipButton.remove();
    });
  });
});

document.getElementById("buttons").appendChild(placeShipButton);
const playAgainButton = document.createElement("button");
playAgainButton.id = "again";
playAgainButton.textContent = "Play Again";
playAgainButton.onclick = () => location.reload();
document.getElementById("buttons").appendChild(playAgainButton);

// event listener to attack on computer
gridComputerCells.addEventListener("click", (e) => {
  // if the game is over, not player's turn, it's hit or missed already, return
  if (gameState.gameOver) return;
  if (!gameState.gameStarted) return;
  if (!gameState.playerTurn) return;
  if (!e.target.classList.contains("cell")) return;
  if (e.target.classList.contains("hit") || e.target.classList.contains("miss"))
    return;
  // get x and y positions
  const x = parseInt(e.target.dataset.x);
  const y = parseInt(e.target.dataset.y);

  const result = computerPlayer.gameBoard.receiveAttack([x, y]);
  if (result === "hit" || result === "sunk") {
    e.target.classList.add("hit");
    // check for if sunk or hit
    statusDiv.textContent = result === "sunk" ? "You sunk a ship!" : "Hit!";
  } else if (result === "missed") {
    e.target.classList.add("miss");
    statusDiv.textContent = "Miss!";
  }

  if (result === "game over") {
    endGame("win");
    return;
  }

  gameState.playerTurn = false;
  computerAttack();
});

// computer attack's logic (random)
async function computerAttack() {
  // get within bounds x and y positions
  const x = Math.floor(Math.random() * player.size);
  const y = Math.floor(Math.random() * player.size);

  const cell = document.getElementById(`player-${x}-${y}`);
  if (cell.classList.contains("hit") || cell.classList.contains("miss")) {
    // recalculate and redo everything if the computer is trying to hit an
    // alreadu hit or missed cell
    // so the computer knows whether a move is legal or not
    computerAttack();
    return;
  }

  const result = player.gameBoard.receiveAttack([x, y]);

  // wait one second so user status text appears and computer "thinking" effect
  await new Promise((resolve) => setTimeout(resolve, 1300));

  if (result === "hit" || result === "sunk") {
    cell.classList.add("hit");
    statusDiv.textContent =
      result === "sunk" ? "Enemy sunk your ship!" : "Enemy hit your ship!";
  } else if (result === "missed") {
    cell.classList.add("miss");
    statusDiv.textContent = "Enemy missed!";
  }
  if (result === "game over") {
    endGame("lose");
    return;
  }
  gameState.playerTurn = true;
}

function endGame(result) {
  gameState.gameOver = true;
  if (result === "win") {
    statusDiv.textContent = "You won!";
  } else {
    statusDiv.textContent = "You lose!";
  }
}
