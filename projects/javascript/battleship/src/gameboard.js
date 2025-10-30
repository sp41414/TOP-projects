import Ship from "./ship.js";

export default class Gameboard {
  constructor(gameBoardType, size = 10) {
    this.size = size;
    this.ships = [];
    this.gameOver = false;
    this.gameBoardType = gameBoardType;
  }
  placeShip(length, position) {
    if (!length || !position)
      throw new Error("Please enter a length and position for the ship");

    // this'll check if the ship is out-of-bounds
    if (position[0] + length > this.size)
      throw new Error(
        "Please enter x value position within the gameboard bounds"
      );
    if (position[1] >= this.size)
      throw new Error("Please enter y value position within gameboard bounds");

    // then it'll go through each x position and place the ship
    let finalPositions = [];
    for (let i = 0; i < length; i++) {
      finalPositions.push([position[0] + i, position[1]]);
    }
    // checks for overlaps
    if (
      this.ships.some((ship) =>
        ship.positions.some((pos) =>
          finalPositions.some(
            (newPos) => pos[0] === newPos[0] && pos[1] === newPos[1]
          )
        )
      )
    ) {
      throw new Error("Ship overlaps");
    }
    let ship = new Ship(length, finalPositions);
    this.ships.push(ship);
  }
  receiveAttack(position) {
    // PLAN: I don't have to worry about multiple duplicate hits because on the UI,
    // i'll disable the button because the ship was already hit

    // check for out of bounds
    if (position[0] >= this.size || position[1] >= this.size)
      throw new Error("Invalid attack out of gameboard bounds");

    // then go through each ship object
    for (let element of this.ships) {
      // if one of the ship's positions are the same as the attack position,
      // then hit the ship
      if (
        element.positions.some(
          (pos) => pos[0] === position[0] && pos[1] === position[1]
        )
      ) {
        element.hit();
        // then check if every ship is sunk
        if (this.checkShipsSunk()) {
          return "game over";
        }
        if (element.sunk) {
          return "sunk";
        }
        return "hit"; // hit return
      }
    }

    return "missed"; // missed return
  }

  checkShipsSunk() {
    if (this.ships.every((ship) => ship.sunk)) {
      this.gameOver = true;
      return true;
    }
    return false;
  }
}
