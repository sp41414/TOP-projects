const gameBoard = (() => {
	let gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	let currentMarker = 1;
	const victory = () => {
		gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
	const gameMove = (marker, position) => {
		gameBoard[position] = marker;
	}
	return { gameBoard, victory, gameMove, currentMarker };
})();

const Player = (marker) => {
	const playerMove = (position) => {
		if (marker === gameBoard.currentMarker) {
			gameBoard.currentMarker++
			gameBoard.gameMove(marker, position);
		} else {
			return;
		}
	}
}
const gameContainer = document.getElementById("game-container")

function initializeGameBoard() {
	for (i = 1; i <= 9; i++) {
		let cell = document.createElement("div")
		cell.className = "cell"
		cell.id = `${i}`
		gameContainer.appendChild(cell)
	}
}

let player = Player(1);

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
		width: 50%;
		height: 50%;
	`
})
markerOSelection.addEventListener("click", () => {
	player = Player(2);
	choiceContainer.style.display = "none";
	initializeGameBoard();
	gameContainer.style.display = "grid";
		gameContainer.style.cssText = `
		display: grid; 
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
		width: 50%;
		height: 50%;
	`
})