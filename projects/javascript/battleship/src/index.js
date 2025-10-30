import Player from "./player.js";

// initialize the players
let computerPlayer = new Player("computer");
let player = new Player();

let gameState = {
  playerTurn: true,
  gameOver: false,
};

const gameContainer = document.querySelector(".game-area");
const playerGameGrid = document.querySelector(".player-board-container");
const computerGameGrid = document.querySelector(".computer-board-container");

const statusDiv = document.createElement("div");

statusDiv.id = "status";
statusDiv.textContent = "Click on computer's board to attack!";
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
      console.log("Failed placement ", e);
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
