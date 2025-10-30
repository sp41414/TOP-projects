import Gameboard from "../gameboard";

let gameboard = new Gameboard();

test("places ships at expected coordinates", () => {
  gameboard.placeShip(3, [2, 2]);
  expect(gameboard.ships).toEqual([
    (Ship = {
      hits: 0,
      length: 3,
      positions: [
        [2, 2],
        [3, 2],
        [4, 2],
      ],
      sunk: false,
    }),
  ]);
});

test("doesn't place out-of-bounds ships", () => {
  expect(() => gameboard.placeShip(4, [8, 8])).toThrow(Error);
});

test("takes attacks", () => {
  expect(() => gameboard.receiveAttack([2, 2])).toBeTruthy();
  gameboard.receiveAttack([2, 2]);
  expect(gameboard.ships).toEqual([
    (Ship = {
      hits: 1,
      length: 3,
      positions: [
        [2, 2],
        [3, 2],
        [4, 2],
      ],
      sunk: false,
    }),
  ]);
});

test("sinks", () => {
  expect(() => gameboard.receiveAttack([3, 2])).toBeTruthy();
  expect(() => gameboard.receiveAttack([4, 2])).toBeTruthy();
  gameboard.receiveAttack([3, 2]);
  gameboard.receiveAttack([4, 2]);
  expect(gameboard.ships).toEqual([
    (Ship = {
      hits: 3,
      length: 3,
      positions: [
        [2, 2],
        [3, 2],
        [4, 2],
      ],
      sunk: true,
    }),
  ]);
});

test("game over (all ships sunk)", () => {
  // already sunk all ships in above code
  expect(gameboard.checkShipsSunk()).toBeTruthy();
  expect(gameboard.gameOver).toBeTruthy();
});
