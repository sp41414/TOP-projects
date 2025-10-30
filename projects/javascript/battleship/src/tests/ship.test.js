import Ship from "../ship";

let ship = new Ship(3);

test("takes hits", () => {
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("sinks", () => {
  ship.hit();
  ship.hit();
  expect(ship.sunk).toBeTruthy();
});

test("doesn't get hit while sunk", () => {
  ship.hit();
  expect(ship.hits).toBe(3);
});
