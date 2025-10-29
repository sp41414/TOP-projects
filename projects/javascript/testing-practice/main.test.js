import {
  Calculator,
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray,
} from "./main.js";

test("capitalize", () => {
  expect(capitalize("Hi, there!")).toBe("HI, THERE!");
});

test("reverse string", () => {
  expect(reverseString("Hi, there!")).toBe("!ereht ,iH");
});

let calculator = new Calculator();
test("calculator addition", () => {
  expect(calculator.add(1, 2)).toBe(3); // basic addition
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3); // handle floats
  expect(calculator.add(9223372036854, 2)).toBe(9223372036856); // handle int64 cases
});
test("calculator subtraction", () => {
  expect(calculator.subtract(2, 1)).toBe(1); // basic subtraction
  expect(calculator.subtract(0.2, 0.1)).toBeCloseTo(0.1); // handle floats
  expect(calculator.subtract(9223372036854, 2)).toBe(9223372036852); // handle int64 cases
});

test("calculator division", () => {
  expect(calculator.divide(2, 1)).toBe(2); // basic division
  expect(calculator.divide(4, 2.1)).toBe(1.9047619047619047); // handle floats
  expect(calculator.divide(9223372036854, 1)).toBe(9223372036854); // handle int64 cases
  expect(() => calculator.divide(2, 0)).toThrow(Error);
});

test("calculator multiplication", () => {
  expect(calculator.multiply(2, 1)).toBe(2); // basic multiplication
  expect(calculator.multiply(4, 2.1)).toBe(8.4); // handle floats
  expect(calculator.multiply(9223372036854, 1)).toBe(9223372036854); // handle int64 cases
});

test("caesar cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze array", () => {
  // use toEqual for objects
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
