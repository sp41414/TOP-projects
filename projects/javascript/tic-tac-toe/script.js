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

let player = Player(1);

const choiceContainer = document.getElementById("choice-container");
const markerXSelection = document.getElementById("marker-x");
const markerOSelection = document.getElementById("marker-o");

markerXSelection.addEventListener("click", () => {
	player = Player(1);
	choiceContainer.style.display = "none";	
	gameContainer.style.display = "block";
})
markerOSelection.addEventListener("click", () => {
	player = Player(2);
	choiceContainer.style.display = "none";
	gameContainer.style.display = "block";
})