// evaluation buttons
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const modulus = document.getElementById("modulus");
const power = document.getElementById("power");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

// numbers
const number1 = document.getElementById("1");
const number2 = document.getElementById("2");
const number3 = document.getElementById("3");
const number4 = document.getElementById("4");
const number5 = document.getElementById("5");
const number6 = document.getElementById("6");
const number7 = document.getElementById("7");
const number8 = document.getElementById("8");
const number9 = document.getElementById("9");
const number0 = document.getElementById("0");

// display
const display = document.getElementById("display");
const result = document.getElementById("result");

// operator functions
function addition(num1, num2) {
  if (num2 == undefined) {
    return num1;
  }
  return num1 + num2;
}
function multiplication(num1, num2) {
  if (num2 == undefined) {
    return num1;
  }
  return num1 * num2;
}
function subtraction(num1, num2) {
  if (num2 == undefined) {
    return num1;
  }
  return num1 - num2;
}
function modulusOperation(num1, num2) {
  if (num2 == undefined) {
    return num1;
  }
  if (num2 != 0) {
    return num1 % num2;
  } else {
    return 0;
  }
}
function division(num1, num2) {
  if (num2 == undefined) {
    return num1;
  }
  if (num2 === 0) {
    return "ERROR";
  } else {
    return num1 / num2;
  }
}
function powerOperation(number, power) {
  if (power == undefined) {
    return number;
  }
  let tempNumber = number;
  for (let i = 1; i < power; i++) {
    tempNumber *= number;
  }
  return tempNumber;
}

function operate(num1, operate, num2) {
  switch (operate) {
    case "add":
      return addition(num1, num2);
    case "multiply":
      return multiplication(num1, num2);
    case "subtract":
      return subtraction(num1, num2);
    case "modulus":
      return modulusOperation(num1, num2);
    case "divide":
      return division(num1, num2);
    case "power":
      return powerOperation(num1, num2);

    default:
      return "ERROR";
  }
}

// populate the display with whatever number was pressed.
let operatorPressed = false;
let firstNumber;
let secondNumber;
let currentOperator;
function populateDisplay(number) {
  if (!operatorPressed) {
    firstNumber = (firstNumber ?? 0) * 10 + number;
    result.textContent = firstNumber;
  } else {
    secondNumber = (secondNumber ?? 0) * 10 + number;
    result.textContent = secondNumber;
  }
}
function clearDisplay() {
  operatorPressed = false;
  firstNumber = undefined;
  secondNumber = undefined;
  result.textContent = 0;
}
function setOperator(operator) {
  if (firstNumber != undefined) {
    operatorPressed = true;
    currentOperator = operator;
    result.textContent = 0;
  } else {
    return;
  }
}

// event listeners for every button
number1.addEventListener("click", () => {
  populateDisplay(1);
});
number2.addEventListener("click", () => {
  populateDisplay(2);
});
number3.addEventListener("click", () => {
  populateDisplay(3);
});
number4.addEventListener("click", () => {
  populateDisplay(4);
});
number5.addEventListener("click", () => {
  populateDisplay(5);
});
number6.addEventListener("click", () => {
  populateDisplay(6);
});
number7.addEventListener("click", () => {
  populateDisplay(7);
});
number8.addEventListener("click", () => {
  populateDisplay(8);
});
number9.addEventListener("click", () => {
  populateDisplay(9);
});
number0.addEventListener("click", () => {
  populateDisplay(0);
});
clear.addEventListener("click", () => {
  clearDisplay();
});
add.addEventListener("click", () => {
  setOperator("add");
});
subtract.addEventListener("click", () => {
  setOperator("subtract");
});
multiply.addEventListener("click", () => {
  setOperator("multiply");
});
modulus.addEventListener("click", () => {
  setOperator("modulus");
});
divide.addEventListener("click", () => {
  setOperator("divide");
});
power.addEventListener("click", () => {
  setOperator("power");
});
equals.addEventListener("click", () => {
  if (
    firstNumber !== undefined &&
    secondNumber !== undefined &&
    currentOperator
  ) {
    const output = operate(firstNumber, currentOperator, secondNumber);
    result.textContent = output;
    firstNumber = output;
    secondNumber = undefined;
    operatorPressed = false;
  }
});
