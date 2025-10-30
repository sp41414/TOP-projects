export default class Ship {
  constructor(length, positions, hits = 0, sunk = false) {
    this.length = length;
    this.hits = hits;
    this.sunk = false;
    this.positions = positions;
  }
  hit() {
    if (this.sunk) {
      return;
    }
    this.hits++;
    this.isSunk();
    return true;
  }
  isSunk() {
    if (this.hits >= this.length) this.sunk = true;
  }
}
