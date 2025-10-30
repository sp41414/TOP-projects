import Gameboard from "./gameboard.js";

export default class Player {
  constructor(playerType = "player") {
    this.playerType = playerType;
    this.gameBoard = new Gameboard(playerType);
    this.size = this.gameBoard.size;
  }
  // no methods, Gameboard handles it all.
}
