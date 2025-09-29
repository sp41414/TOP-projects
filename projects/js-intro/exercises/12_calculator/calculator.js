const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (array) {
  let product = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i + 1] != undefined) {
      product *= array[i + 1];
    } else {
      break;
    }
  }
  return product;
};

const power = function (number, power) {
  let tempNumber = number;
  for (let i = 1; i < power; i++) {
    tempNumber *= number;
  }
  return tempNumber;
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  }

  for (let i = number; i > 1; i--) {
    number *= i - 1;
  }
  return number;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
