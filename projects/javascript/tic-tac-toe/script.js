const restartButton = document.getElementById("restart");
restartButton.style.display = "none";
const gameBoard = (() => {
  let gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let gameBoardref = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let currentMarker = 1;
  const gameMove = (marker, position) => {
	if (gameBoard[position] == 0) {
   		gameBoard[position] = marker;
    	gameBoardref[position] = marker;
	} else {
		return;
	}
  };
  const checkWin = () => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const check = (board) => {
      for (let line of winningLines) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          const winner = board[a] === 1 ? "X" : "O";
          return { winner, line };
        }
      }
      return null; // no winner yet
    };
    return { check };
  };
  // i felt like the check win would be TOO LONG if i added yet another block of code
  const removeEventListeners = ( ) => {
	document.querySelectorAll(".cell").forEach(cell => {
		cell.replaceWith(cell.cloneNode(true)); // this is what removes the event listener
	})
  }
  return { gameMove, currentMarker, gameBoardref, checkWin, removeEventListeners };
})();

const Player = (marker) => {
  const playerMove = (position) => {
    if (marker === gameBoard.currentMarker) {
      gameBoard.gameMove(marker, position);
      const cell = document.getElementById(`${position}`);
	  if (cell.textContent !== "") return;
      cell.textContent = marker < 2 ? "X" : "O";
      const winnerText = document.getElementById("winner-text");
      const winnerContainer = document.getElementById("winner");
      if (gameBoard.checkWin().check(gameBoard.gameBoardref)) {
        // X or O
        winnerContainer.style.cssText =
          "display: flex; gap: 1.4em; align-items: center; justify-content: center;";
        restartButton.style.display = "block";
        restartButton.addEventListener("click", () => {
          location.reload();
        });
        winnerText.textContent = `The Winner is ${gameBoard.checkWin().check(gameBoard.gameBoardref).winner}`;
		gameBoard.removeEventListeners();
      } else if (!gameBoard.gameBoardref.includes(0)) {
        // DRAW
        winnerText.textContent = `It's a DRAW!`;
        winnerContainer.style.cssText =
          "display: flex; gap: 1.4em; align-items: center; justify-content: center;";
        restartButton.style.display = "block";
        restartButton.addEventListener("click", () => {
          location.reload();
        });
		gameBoard.removeEventListeners();
      } else {
        gameBoard.currentMarker = gameBoard.currentMarker === 1 ? 2 : 1;
        AI.move(gameBoard.gameBoardref, marker);
      }
    } else {
      return;
    }
  };
  return { playerMove, marker };
};

const AI = (() => {
  const move = (gameBoardArray, playerMarker) => {
    if (gameBoard.currentMarker != player.marker) {
      let emptyArray = [];
      gameBoardArray.forEach((element, index) => {
        if (element === 0) {
          emptyArray.push(index);
        }
      });
      if (emptyArray.length === 0) {
        return;
      }
      const choice = emptyArray[Math.floor(Math.random() * emptyArray.length)];
      const AIMarker = playerMarker === 1 ? 2 : 1;
      gameBoard.gameMove(AIMarker, choice);
      const cell = document.getElementById(`${choice}`);
      cell.textContent = AIMarker === 1 ? "X" : "O";
      gameBoard.currentMarker = gameBoard.currentMarker === 1 ? 2 : 1;
    }
  };
  return { move };
})();

const gameContainer = document.getElementById("game-container");

let player = Player(1);

function initializeGameBoard() {
  for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.id = `${i}`;
    cell.addEventListener("click", (button) => {
      player.playerMove(Number(button.target.id));
    });
    gameContainer.appendChild(cell);
  }
}

const choiceContainer = document.getElementById("choice-container");
const markerXSelection = document.getElementById("marker-x");
const markerOSelection = document.getElementById("marker-o");

markerXSelection.addEventListener("click", () => {
  player = Player(1);
  choiceContainer.style.display = "none";
  initializeGameBoard();
  gameContainer.style.display = "grid";
  gameContainer.style.cssText = `
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		width: clamp(300px, 50%, 600px);
		height: 50%;
	`;
});
markerOSelection.addEventListener("click", () => {
  player = Player(2);
  gameBoard.currentMarker = 2;
  choiceContainer.style.display = "none";
  initializeGameBoard();
  gameContainer.style.display = "grid";
  gameContainer.style.cssText = `
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		width: clamp(300px, 50%, 600px);
		height: 50%;
	`;
});
