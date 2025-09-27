// world's worst solution to a problem you'll ever see (next to if (value == 1) {} else if (value == 2) {} ....)
function isInt(n) {
  return n % 1 === 0;
}

const sumAll = function (value1, value2) {
  // So the users dont input a string or a floating number, it first checks if both values are floats
  // then it checks if both values are not a number, and then it finally checks if the number is negative.
  if (
    !isInt(value1) ||
    !isInt(value2) ||
    typeof value1 != "number" ||
    typeof value2 != "number" ||
    0 > value1 ||
    0 > value2
  ) {
    return "ERROR";
  }
  let newValue = 0;
  let sum;

  if (value1 > value2) {
    newValue = value2;
    sum = value2;
    for (i = value2 + 1; i <= value1; i++) {
      sum += i;
    }
  } else if (value2 > value1) {
    newValue = value1;
    sum = value1;
    for (i = value1 + 1; i <= value2; i++) {
      sum += i;
    }
  } else {
    console.log("An Unexpected error occured");
    return;
  }
  return sum;
};

console.log(sumAll(4, 2));
console.log(sumAll(2, 4));
console.log(sumAll(1, 4000));

// Do not edit below this line
module.exports = sumAll;
